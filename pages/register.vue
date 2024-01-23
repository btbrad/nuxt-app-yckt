<script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus'
  import { ElMessage } from 'element-plus'

  useHead({
    title: '注册'
  })

  definePageMeta({
    layout: 'blank'
  })

  const formRef = ref<FormInstance>()
  const model = ref({
    username: '',
    password: '',
    confirmPass: '',
  })

  const rules: FormRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    confirmPass: [{
      required: true,
      message: '请再次输入密码',
    }, {
      validator: (rule, value, callback) => {
        if (value !== model.value.password) {
          callback(new Error('两次输入的密码不一致'))
          return false
        }
        else {
          callback()
          return true
        }
      },
      trigger: ['blur', 'input'],
    }],
  }

  const register = async () => {
    await formRef.value!.validate()
    // @ts-ignore
    const { ok } = await httpPost('/api/register', {
      username: model.value.username,
      password: model.value.password,
      confirmPass: model.value.confirmPass
    })
    if (ok) {
      ElMessage.success({ message: '注册成功' })
      navigateTo('/login')
    }
  }

</script>

<template>
  <h2 class="w-full text-center mb-2">加入羊群</h2>
  <el-form ref="formRef" :model="model" :rules="rules" class="w-[340px]" size="large">
    <el-form-item prop="username">
      <el-input v-model.value="model.username" placeholder="用户名" clearable />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model.value="model.password" type="password" placeholder="密码" clearable />
    </el-form-item>
    <el-form-item prop="confirmPass">
      <el-input v-model.value="model.confirmPass" type="password" placeholder="确认密码" clearable />
    </el-form-item>

    <div>
      <el-button class="w-full" type="primary" @click="register">注册</el-button>
    </div>

    <div class="w-full flex justify-center items-center text-xs mt-5 text-gray-600">
      注册即同意
      <el-button link type="primary" size="small">《服务协议》</el-button>
      和<el-button link type="primary" size="small">《隐私政策》</el-button>
    </div>
  </el-form> 
</template>