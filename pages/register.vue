<script setup lang="ts">
  useHead({
    title: '注册'
  })

  definePageMeta({
    layout: 'blank'
  })
</script>

<template>
  <h2 class="w-full text-center mb-2">加入羊群</h2>
  <el-form ref="formRef" class="w-[340px]" size="large">
    <el-form-item prop="username">
      <el-input placeholder="用户名" clearable />
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="密码" clearable />
    </el-form-item>
    <el-form-item prop="repassword">
      <el-input type="password" placeholder="密码" clearable />
    </el-form-item>

    <div>
      <el-button class="w-full" type="primary">注册</el-button>
    </div>

    <div class="w-full flex justify-center items-center text-xs mt-5 text-gray-600">
      注册即同意
      <el-button link type="primary" size="small">《服务协议》</el-button>
      和<el-button link type="primary" size="small">《隐私政策》</el-button>
    </div>
  </el-form> 
</template>