<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <el-input v-model="input" placeholder="Please input" />
  <el-button @click="login">
    <el-icon><Search /></el-icon>
    login
  </el-button>
</template>

<script>
//import { ElMessage } from "element-plus";
//import { Search } from "element-plus/icons-vue";
const { ElMessage } = ElementPlus;

export default {
  name: "App",
  components: {},
  data() {
    return {
      input: "123",
    };
  },
  methods: {
    login() {
      if (this.input == "456") {
        ElMessage("this is a message.");
      }
    },
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
