<template>
  <main>
    <FirstPage />
    <RouterLink to="/signupForm">Go To Signup Form</RouterLink>
    <!-- <RouterLink to="/loginForm">Go To Login Form</RouterLink>
    <RouterLink to="/dashBoard">Go To Dashboard</RouterLink> -->
  </main>
</template>

<script>
import FirstPage from '@/components/FirstPage.vue'

export default {
  components: {
    FirstPage
  }
}
</script>
