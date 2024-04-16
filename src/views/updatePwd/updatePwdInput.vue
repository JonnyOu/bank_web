/*
 * @Author: JonnyOu 
 * @Date: 2024-04-16 18:44:50 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-16 19:13:57
 * @Description:  
 */
<script setup>
import { message } from 'ant-design-vue';
import defaultConfig from '@/config/index';
const store_useUpdatePwdStore = useUpdatePwdStore();
const store_useCommonStore = useCommonStore();
const { publicKeyArr } = defaultConfig;
const { updatePwdConf } = store_useUpdatePwdStore;
const { getPublicKeyIndex } = store_useCommonStore;

const emit = defineEmits(['jump']);

const formState = reactive({
  password: '',
  rePassword: ''
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

  // 判断两次密码是否一致
  if (formState.password !== formState.rePassword) {
    message.error('两次密码输入不一致。');
    return;
  }
  
  // 加密密码
  const encryPtPwd = encrypt.loginEncrypt(publicKey.value, formState.password);
  const param = {
    'password': encryPtPwd,
    'keyIndex': keyIndex.value
  };
  await updatePwdConf(param);
  
  emit('jump', 1);
};

const rules = {
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  rePassword: [
    {
      required: true,
      message: '请重复输入密码'
    }
  ],
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
      class="update-pwd-form"
      :rules="rules"
    >
      <a-form-item
        label="密码"
        name="password"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="重复输入密码"
        name="rePassword"
      >
        <a-input-password v-model:value="formState.rePassword" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }" class="text-center">
        <a-button type="primary" html-type="submit">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>

</template>

<style scoped>
.login {
  width: 60%;
  margin: 30px auto;
  color: white;
}
.update-pwd-form {
  position: relative;
  left: -15%;
  text-align: left;
}
</style>


