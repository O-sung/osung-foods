<template>
  <div class="sign-up bg-no-repeat w-screen h-auto">
    <v-container>
      <v-container class="text-center">
        <h3 class="text-white bg-red inline-block p-4 rounded">CREATE YOUR ACCOUNT</h3>
      </v-container>
      <v-card class="form-card text-white max-w-[95%] mx-auto mx-md-16 sm:max-w-[80%]">
        <form @submit.prevent="submit" class="p-6">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            v-model="username.value.value"
            :counter="10"
            :error-messages="username.errorMessage.value"
            label="User Name"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

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

          <v-container class="mt-4">
            <v-btn
              class="me-4"
              type="submit"
              @click="loading = !loading"
              :disabled="loading"
              :loading="loading"
            >
              Submit
            </v-btn>
            <v-btn @click="handleReset"> Clear </v-btn>
          </v-container>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { fireApp, db } from '../main.js'
// import EmailValidator from './EmailValidator.vue';

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true
      return 'Name needs to be at least 2 characters.'
    },
    username(value) {
      if (value?.length >= 2) return true
      return 'Username needs to be at least 2 characters.'
    },
    password(value) {
      if (value?.length >= 6) return true
      return 'Password needs to be at least 6 characters.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true
      return 'Phone number needs to be at least 9 digits.'
    },
    email(value) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return true
      return 'Must be a valid e-mail.'
    }
  }
})

const name = useField('name')
const username = useField('username')
const phone = useField('phone')
const email = useField('email')
const password = useField('password')

const loading = false
const router = useRouter()
const auth = getAuth(fireApp)
const submit = handleSubmit(async (values) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    const userId = userCredential.user.uid
    // THIS CODE KICKS IN ONCE THE ACCOUNT HAS BEEN CREATED
    console.log(values.email, values.password, userId)
    alert(`Congratulations ${values.username}. Your account has been created successfully!`)
    localStorage.setItem('activeUser', JSON.stringify(userId))
    router.push('/dashBoard')

    const userData = doc(db, 'users', userId)
    await setDoc(userData, {
      name: values.name,
      username: values.username,
      email: values.email
    })
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Email has already been used')
    } else if (error.code === 'auth/network-request-failed') {
      alert('Registration not successful. Please check your connection and try again')
    }
    console.log(error.code)
  }
})
</script>

<style scoped>
.sign-up {
  background-image: linear-gradient(#201d1d94, #1b19199d), url(@/assets/imgs/hero-bg-img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.form-card {
  background-color: #00000052;
}
</style>
