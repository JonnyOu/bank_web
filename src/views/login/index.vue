<script setup>
const store_useLoginStore = useLoginStore();
const router = useRouter();
const { login } = store_useLoginStore;

const formState = reactive({
  username: '',
  pwd: '',
  remember: true,
});
const onFinish = async () => {
  const param = new FormData();
  param.append('username', formState.username);
  param.append('pwd', formState.pwd);
  // const params = {
  //   username: formState.username,
  //   pwd: formState.pwd
  // };
  const res = await login(param);
  // 登录成功，将token放入localStorage，跳转到首页
  if (res.code === 20000) {
    localStorage.setItem('Authorization', res.data.token);
    router.push({ path: '/' });
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>

<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Pwd"
      name="pwd"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.pwd" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form> 
</template>

<style scoped>
  
</style>
