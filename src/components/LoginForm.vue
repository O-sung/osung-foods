<template>
  <div><h1>LOGIN FORM</h1></div>

  <v-card class="bg-green max-w-[80%] m-auto">
    <form @submit.prevent="submit" class="p-6">
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        type="password"
        :error-messages="password.errorMessage.value"
        label="Password"
      ></v-text-field>

      <v-btn class="me-4" type="submit"> Log In </v-btn>

      <!-- <v-btn @click="handleReset"> Clear </v-btn> -->
    </form>
  </v-card>
</template>

<script setup>
import { useField } from 'vee-validate'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { fireApp } from '../main.js'
import { useRouter } from 'vue-router'

const auth = getAuth(fireApp)
const router = useRouter()

const email = useField('email')
const password = useField('password')

const submit = async (values) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
    console.log(userCredential)
    router.push('/dashBoard')
  } catch (error) {
    console.log(error.code)
  }
}
</script>

<style scoped></style>
