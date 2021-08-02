<template>
  <div class="settings-page" v-if="currentUser">
    <div class="container page">
      <div class="content-wrapper">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Settings</h1>
          <mcv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <form @submit.prevent="onSubmit" class="form">
                <input
                  type="text"
                  class="form__input"
                  v-model="form.image"
                  placeholder="URL of profile image"
                />
                <input
                  type="text"
                  class="form__input"
                  v-model="form.username"
                  placeholder="Username"
                />
                <textarea
                  class="form__input"
                  v-model="form.bio"
                  placeholder="Short bio about you"
                ></textarea>
                <input
                  type="text"
                  class="form__input"
                  v-model="form.email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  class="form__input"
                  v-model="form.password"
                  placeholder="New password"
                />
              <button
                type="submit"
                class="form__button"
                :disabled="isSubmitting"
              >
                Update settings
              </button>
          </form>
          <hr />
          <button class="button" @click="logout" type="text">
            Or cick here to logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {
  getterTypes as authGetterTypes,
  actionTypes as authActionTypes
} from '@/store/modules/auth'
import McvValidationErrors from '@/components/ValidationErrors'

export default {
  name: 'McvSettings',
  components: {
    McvValidationErrors
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      validationErrors: state => state.settings.validationErrors
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    form() {
      if (this.currentUser) {
        return {
          username: this.currentUser.username,
          bio: this.currentUser.bio,
          image: this.currentUser.image,
          email: this.currentUser.email,
          password: ''
        }
      }

      return {
        username: '',
        bio: '',
        image: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(authActionTypes.updateCurrentUser, {
        currentUserInput: this.form
      })
    },
    logout() {
      this.$store.dispatch(authActionTypes.logout).then(() => {
        this.$router.push({name: 'globalFeed'})
      })
    }
  }
}
</script>
