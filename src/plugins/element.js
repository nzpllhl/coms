import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input, Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Carousel,
    CarouselItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Pagination,
    Switch,
    Tooltip,
    Dialog,
    MessageBox

} from "element-ui"

Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm