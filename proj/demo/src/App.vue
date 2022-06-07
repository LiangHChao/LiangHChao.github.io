<template>
  <a-button type="primary">我要吃饭</a-button>
  <WangEditor/>
</template>

<script>
import WangEditor from "./components/wangeditor.vue";

export default {
  name: "App",
  components: {
    WangEditor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
