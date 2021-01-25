import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from '@/components/MyComponent'
import { Layout, Row, Col, Tabs, Button } from 'ant-design-vue'
import 'normalize.css'

createApp(App)
  .use(MyComponent)
  .use(Layout)
  .use(Row)
  .use(Col)
  .use(Tabs)
  .use(Button)
  .mount('#app')
