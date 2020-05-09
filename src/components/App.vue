// 组件模板
<template>
  <div>
    <h1>这是App 跟组件</h1>
  </div>
</template>
//暴露数据对象
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
//样式  style添加scoped就是私有样式
<style lang="less" scoped>
h1 {
  color: red;
}
</style>;
