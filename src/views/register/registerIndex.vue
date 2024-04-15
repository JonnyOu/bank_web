/*
 * @Author: JonnyOu 
 * @Date: 2024-04-11 17:46:29 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-15 20:07:24
 * @Description:  
 */

<script setup>
import { message } from 'ant-design-vue';
import defaultConfig from '@/config/index';
const store_useRegisterStore = useRegisterStore();
const store_useCommonStore = useCommonStore();
const { publicKeyArr } = defaultConfig;
const { register } = store_useRegisterStore;
const { sendSms, getPublicKeyIndex } = store_useCommonStore;

const emit = defineEmits(['jump']);

const formState = reactive({
  username: '',
  password: '',
  phone: '',
  smsCode: '',
  remember: true,
});

const publicKey = ref('');
const keyIndex = ref('');

// 短信编号
const smsNo = ref('');
// 发送短信按钮文字
const smsText = ref('发送验证码');
// 发送短信按钮状态
const smsStatus = ref(false);
// 长度限制
const phoneMaxLength = 11;
const smsCodeMaxLength = 6;

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
    'phone': formState.phone,
    'smsCode': formState.smsCode,
    'keyIndex': keyIndex.value
  };
  const res = await register(param);
  // 注册成功，去到结果页
  if (res.code === 20000) {
    emit('jump', 1);
  } else {
    message.error(res.message);
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

/**
 * 60s倒计时
 */
const countDown = (time) => {
  if (time > 0) {
    smsText.value = `${time}秒`;
    smsStatus.value = true;
    time--;
    setTimeout(() => {
      countDown(time);
    }, 1000);
  } else {
    smsText.value = '发送验证码';
    smsStatus.value = false;
  }
};

const sendCode = async () => {
  if (formState.phone && formState.phone.length === 11) {
    // 60s后可再次点击发送短信
    countDown(60);
    const param = {
      phone: formState.phone
    };
    const res = await sendSms(param);
    if (res.code !== 20000) {
      message.error('短信发送失败');
    } else {
      message.success('短信发生成功，验证码有效时间为100秒。');
      smsNo.value = res.data.smsNo;
    }
  } else {
    message.info('请输入合法手机号码！');
  }
};

const phoneValidator = async (_rule, value) => {
  if (value === '') {
    return ;
  } else if (value.length !== 11) {
    return Promise.reject('请输入合法手机号码！');
  }
  return Promise.resolve();
};

const smsCodeValidator = async (_rule, value) => {
  if (value === '') {
    return ;
  } else if (value.length !== 6) {
    return Promise.reject('请输入合法短信验证码！');
  }
  return Promise.resolve();
};

const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名称'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号码'
    },
    {
      trigger: 'blur',
      validator: phoneValidator
    }
  ],
  smsCode: [
    {
      required: true,
      message: '请输入短信验证码'
    },
    {
      trigger: 'blur',
      validator: smsCodeValidator
    }
  ]
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
      class="register-form"
      :rules="rules"
    >
      <a-form-item
        label="用户名"
        name="username"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="手机号码"
        name="phone"
      >
        <a-input v-model:value="formState.phone" :maxlength="phoneMaxLength"/>
      </a-form-item>

      <a-form-item
        label="短信验证码"
        name="smsCode"
      >
        <a-input-group compact>
          <a-input v-model:value="formState.smsCode" style="width: calc(100% - 200px)" :maxlength="smsCodeMaxLength"/>
          <a-button type="primary" @click="sendCode" :disabled="smsStatus">{{ smsText }}</a-button>
        </a-input-group>
        <div v-if="smsNo">短信编号：{{ smsNo }}</div>
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }" class="text-center">
        <a-button type="primary" html-type="submit">注册</a-button>
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
.register-form {
  position: relative;
  left: -15%;
  text-align: left;
}
</style>


