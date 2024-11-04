<script setup>
import FormLayout from '@/components/layouts/FormLayout.vue'
</script>
<template lang="">
  <FormLayout>
    <template #secondaryPane>
      <h1 class="text-secondary">Hello There Welcome Back</h1>
    </template>
    <template #primaryPane>
      <form class="form-container">
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="text" class="form-input" placeholder="Masukkan Email" />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-input"
            placeholder="Masukkan Password"
          />
        </div>
        <buton class="btn-submit">Login</buton>
      </form>
    </template>
  </FormLayout>
</template>
