<template>
  <div class="auth-page">
    <div class="container page">
      <div class="content-wrapper">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">
              Need an account?
            </router-link>
          </p>
          <mcv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></mcv-validation-errors>
          <form class="form" @submit.prevent="onSubmit">
              <input
                class="form__input"
                type="text"
                placeholder="Username"
                v-model="username"
              />
              <input
                class="form__input"
                type="text"
                placeholder="Email"
                v-model="email"
              />
              <input
                class="form__input"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            <button
              class="form__button"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
        <SocialLogin />
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

import McvValidationErrors from '@/components/ValidationErrors.vue'
import {actionTypes} from '@/store/modules/auth'
import SocialLogin from "@/views/SocialLogin";
export default {
  name: 'McvRegister',
  components: {
    McvValidationErrors,
    SocialLogin
  },
  data() {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>
