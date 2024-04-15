<script setup>
import defaultConfig from '@/config/index';

const store_useLoginStore = useLoginStore();
const store_useCommonStore = useCommonStore();
const router = useRouter();
const { publicKeyArr } = defaultConfig;
const { login } = store_useLoginStore;
const { getPublicKeyIndex } = store_useCommonStore;

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const publicKey = ref('');
const keyIndex = ref('');

const getKey = async () => {
  const res = await getPublicKeyIndex();
  keyIndex.value = res.data.publicKeyIndex; 
  publicKey.value = publicKeyArr[keyIndex.value];
};
getKey();

const onFinish = async () => {

  const encryPtPwd = encrypt.loginEncrypt(publicKey.value, formState.password);
  
  const param = {
    'username': formState.username,
    'password': encryPtPwd,
    'keyIndex': keyIndex.value
  };
  const res = await login(param);
  // 登录成功，将token放入localStorage，跳转到首页
  if (res.code === 20000 && res.data.token) {
    localStorage.setItem('Authorization', res.data.token);
    router.push({ path: '/' });
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

// 注册
const register = () => {
  router.push({ path: '/register' });
};
</script>

<template>
  <div class="login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="login-form"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button html-type="submit" class="login-btn">登录</a-button>
      </a-form-item>
    </a-form> 
    <div class="footer">
      <span @click="register" class="register">注册</span>
      <span @click="forgetPwd" class="forget-pwd">忘记密码？</span>
    </div>
    
  </div>

</template>

<style scoped>
.login {
  width: 60%;
  margin: 30px auto;
}
.login-form {
  position: relative;
  left: -15%;
}
.login-btn {
  margin-right: 40px;
}
.footer {
  display: flex;
  justify-content: space-around;
}
.register:hover {
  cursor: pointer;
  color: #00b96b;
}
.forget-pwd:hover {
  cursor: pointer;
  color: #00b96b;
}
</style>
