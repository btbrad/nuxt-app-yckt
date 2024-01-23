<script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus'
  import { useUser } from '../store/user';

  useHead({
    title: '登录'
  })

  definePageMeta({
    layout: 'blank'
  })

  const formRef = ref<FormInstance>()
  const model = ref({
    username: '',
    password: '',
  })

  const rules: FormRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ],
  }

  const store = useUser()
  const login = async () => {
    await formRef.value!.validate()
    // @ts-ignore
    const { ok, data } = await httpPost('/api/login', {
      username: model.value.username,
      password: model.value.password
    })
    if (ok) {
      store.userInfo = data
      navigateTo('/')
    }
  }
</script>

<template>
  <h2 class="flex justify-between mb-2">
    返回羊村
    <el-button type="primary" link @click="navigateTo('/register')">还未入村?</el-button>
  </h2>

  <el-alert title="演示账号密码为：test" type="success" class="!mb-6" show-icon :closable="false" />

  <el-form ref="formRef" :model="model" :rules="rules" class="w-[340px]" size="large">
    <el-form-item prop="username">
      <el-input v-model.value="model.username" placeholder="用户名" clearable />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model.value="model.password" type="password" placeholder="密码" clearable />
    </el-form-item>
    <div>
      <el-button class="w-full" type="primary" @click="login">登录</el-button>
    </div>
  </el-form>
</template>
