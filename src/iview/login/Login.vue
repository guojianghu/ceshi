<template>
  <div class="login">
    <i-form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
      <Form-item prop="user">
        <i-input type="text" v-model="formInline.user" placeholder="请输入您的账户">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </Form-item>
      <Form-item prop="password">
        <i-input type="password" v-model.trim="formInline.password" placeholder="请输入您的密码(空格无效)">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </i-input>
      </Form-item>
      <Form-item>
        <i-button type="primary" @click="handleSubmit('formInline')" long>登录</i-button>
      </Form-item>
    </i-form>
  </div>
</template>
<script>
// 导入
import api from "@/api";
// 导出
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写您的账户",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写您的密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码不能少于6位数",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // 设置存储myToken和username——————————获取后台数据进行设置
          localStorage.setItem("myToken", 111);
          localStorage.setItem("username", 2221);
          this.$Message.success("登录成功!");
          this.$router.push({ name: "renwu" });
        } else {
          this.$Message.error("登录失败!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$color:rgb(16, 81, 105);
.login {
  width: 100%;
  height: 100%;
  background: $color;
  position: fixed;
  .form {
    width: 400px;
    margin: 200px auto;
    padding: 20px 30px 10px 30px;
    background: #fff;
    border-radius: 5px;
  }
}
</style>
