<template>
  <div>
    <!-- 头部 面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户 列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片 -->
    <el-card class="box-card">
      <!-- 搜索框 -->
      <el-row :gutter="30">
        <el-col :span="8">
          <el-input clearable placeholder="请输入内容" v-model="queryInfo.query" @clear="getUserList">
            <el-button @click="getUserList" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="adduser">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格渲染 -->
      <el-table :data="userList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="角色" prop="Character"></el-table-column>
        <el-table-column label="状态" prop="msg_state">
          <!-- 插槽状态 -->
          <template slot-scope="scope">
            <el-switch v-model="scope.row.msg_state" @change="userChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 编辑按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showuser(scope.row.id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="userdelete(scope.row.id)"
            ></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip effect="dark" content="分配角色" placement="top">
              <el-button type="warning" icon="el-icon-star-off" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="15"
      ></el-pagination>
    </el-card>
    <!-- 点击添加用户 -->
    <el-dialog title="添加用户" @close="addDialogseg" :visible.sync="userdialogVisible" width="300">
      <!--添加用户的from  -->
      <el-form
        :model="addFrom"
        :rules="addFromRules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addFrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addFrom.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addFrom.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="addFrom.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="userdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 点击编辑 -->
    <el-dialog title="修改用户" :visible.sync="editaddDialogseg" width="300">
      <el-form
        :model="editform"
        :rules="editformRules"
        ref="editruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editform.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editform.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="editform.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editaddDialogseg = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z-9_-])+(\.[a-zA-Z-9_-])+/;
      if (regEmail.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的邮箱！"));
    };
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^1[3456789]\d{9}$/;
      if (regMobile.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的手机！"));
    };
    return {
      queryInfo: {
        query: "",
        pageSize: 1,
        pageName: ""
      },
      total: "",
      userList: [],
      userdialogVisible: false,
      editaddDialogseg: false,
      editform: {}, // 查询到的用户信息对象
      editformRules: {
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],

        phone: [{ required: true, validator: checkMobile, trigger: "blur" }]
      },
      addFrom: {
        username: "",
        email: "",
        phone: "",
        password: ""
      },
      addFromRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 6,
            max: 8,
            message: "长度在  6到 8 个数字或者字符",
            trigger: "blur"
          }
        ],
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],
        phone: [{ required: true, validator: checkMobile, trigger: "blur" }]
      }
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.$http.get("userName").then(res => {
        this.userList = res.data;
        console.log(this.userList);
      });
    },
    // 监听用户的操做状态
    userChange(usinfo) {
      console.log(usinfo);
      // this.$http
      //   .put(`userName/${usinfo.id}/state/${userinfo.msg_state}`)
      //   .then(res => {
      //     if (res.status !== 200) {
      //       // 如果获取数据失败，就不要更新转态
      //       userinfo.msg_state = !userinfo.msg_state;
      //     }
      //   });
      this.$message.success("跟新用户转态成功！");
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    // 点击添加用户
    adduser() {
      this.userdialogVisible = true;
    },
    // 监听弹框的事件，重置表单
    addDialogseg() {
      this.$refs.ruleForm.resetFields();
    },

    // 点击确定发送请求
    addUser() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$http.get("userName", this.addFrom).then(res => {
            console.log(res);

            this.$message.success("用户添加成功成功！");
          });
          this.userdialogVisible = false;
        }
      });
    },
    // 点击删除用户根据ID删除对应的用户
    userdelete(id) {
      console.log(id);
      // 弹框询问是否删除
      const confirmResult = this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(confirmResult => {
        this.$message({
          type: "success",
          message: "删除成功!"
        }).catch(error => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      });
    },
    // 点击编辑用户对话框,通过对应的id修改对应的值
    showuser(id) {
      console.log(id);
      this.$http.get("userName/" + id).then(res => {
        this.editform = res.data;
        console.log(this.editform, "是对象吗？");
      });
      this.editaddDialogseg = true;
    },
    //点击发送修改后的数据
    editUser() {
      this.$http.get("userName/" + this.editform.id, {
        email: this.editform.email,
        phone: this.editform.phone
      });
      this.$message.success("用户修改成功！");
      this.editaddDialogseg = false;
      this.$refs.editruleForm.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
</style>