import { createFromIconfontCN } from '@ant-design/icons-vue';

const SIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3352137_z2xhhxhu9qt.js', // ε¨ iconfont.cn δΈηζ
});

export default {
  install(app) {
    app.component('s-icon', SIcon)
  }
}