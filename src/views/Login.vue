<template>
  <div class="auth-page">
    <div class="container page">
      <div class="content-wrapper">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">
              Have an account?
            </router-link>
          </p>
          <mcv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></mcv-validation-errors>
          <form  class="form" @submit.prevent="onSubmit">
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
              Sign In
            </button>
          </form>
        </div>
        <SocialLogin />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import McvValidationErrors from '@/components/ValidationErrors.vue'
import SocialLogin from '@/views/SocialLogin.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'McvLogin',
  components: {
    McvValidationErrors,
    SocialLogin
  },
  data() {
    return {
      email: '',
      password: ''
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
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>

<style lang="scss">
.content-wrapper {
background-color: #fff;
margin-bottom: 1.5rem;
  margin-top: 1.5rem;
padding: 1.5rem;
border-radius: .5rem;
box-shadow: 0 0px 0.5rem #aaa;
}
</style>