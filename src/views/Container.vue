<template>
  <el-container class="app-container" direction="vertical">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import Header from "@/views/Menu/Header";
export default {
  name: "Container",
  data() {
    return {};
  },
  components: {
    Header
  },
  methods: {}
};
</script>

<style>
</style>
