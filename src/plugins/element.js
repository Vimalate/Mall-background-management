import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(Switch)
Vue.use(TableColumn)
Vue.use(FormItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
