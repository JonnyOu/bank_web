/*
 * @Author: JonnyOu 
 * @Date: 2024-04-17 17:07:30 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-17 21:13:41
 * @Description:  文件上传/下载功能
 */

<script setup>
import { UploadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
const store_useCommonStore = useCommonStore();
const { uploadFile, uploadFileMul } = store_useCommonStore;

const fileList = ref([]);
const headers = {
  'Content-Type': 'multipart/form-data',
};

const upload = async (e) => {
  const param = {
    file: e.file,
    name: '123'
  };
  const res = await uploadFile(param);
  if (res.code === 20000) {
    e.onSuccess();  
  } else {
    message.error('文件上传失败');
    e.onError();
  }
  console.log('fileList', fileList.value);
};

const fileList2 = ref([]);

const beforeUpload = (file) => {
  fileList2.value = [...fileList2.value, file];
  console.log('fileList2', fileList2.value);
  return false;
};

const handleChange = (file) => {
  console.log('change', file);   
};

const upload2 = async () => {
  const formData = new FormData();
  fileList2.value.forEach(file => {
    formData.append('files', file);
  });
  const res = await uploadFileMul(formData);
};


</script>
<template>
  <div class="file-operate">
    <div>
      <div>单文件上传，每选中一张图片，立刻上传</div>
      <a-upload
        v-model:file-list="fileList"
        list-type="picture"
        :customRequest="upload"
        :headers="headers"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          选择文件
        </a-button>
      </a-upload>
    </div>

    <!-- todo 图片无法反显 -->
    <div class='upload-file'>
      <div>多文件上传，前端选择完图片后，点击一次按钮，发起一次请求将所有文件一次性上传</div>
      <a-button type='primary' @click='upload2'>上传文件</a-button>
      <a-upload
        :file-list="fileList2"
        list-type="picture"
        :headers="headers"
        :before-upload="beforeUpload"
        @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          选择文件
        </a-button>
      </a-upload>
    </div>
  </div>
</template>

<style scoped>
.upload-file {
  margin-top: 20px;
}
.file-operate {
  color: black;
}
:deep(.ant-btn > span) {
  color: black;
}
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>