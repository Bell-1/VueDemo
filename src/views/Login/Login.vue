<template>
  <div class="Login">
    <div class="login-bg">
      <img src="@/assets/images/login-bg.jpg" alt />
    </div>
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <el-form-item label label-width="0">
        <el-input v-model="form.name" placeholder="账户"></el-input>
      </el-form-item>
      <el-form-item label label-width="0">
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <div class="login-btn-row">
        <el-button class="login-btn" plain @click="login">登陆</el-button>
        <el-button class="regist-btn" type="text">注册</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
	  login(){
		  this.$router.push('/app/home');
	  }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.Login {
  .login-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      min-width: 1200px;
    }
  }
  .form {
    padding: 50px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    border-radius: 20px;
    box-shadow: 0 5px 30px rgba(#000, 0.3);
    .login-btn-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .login-btn {
        background: rgba(#fff, 0.2);
        color: white;
      }
      .regist-btn {
        color: white;
      }
    }
  }
}
</style>
