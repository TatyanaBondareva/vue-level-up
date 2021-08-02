<template>
<header class="header">
<div class="container header__container">
      <router-link class="navbar-brand" :to="{name: 'globalFeed'}">
        Vue Level Up
      </router-link>
      <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link class="navbar__link" :to="{name: 'globalFeed'}"
            >Home</router-link
          >
        </li>
        <template v-if="isLoggedIn">
          <li class="navbar__item">
            <router-link class="navbar__link" :to="{name: 'createArticle'}">
              <i class="ion-compose" />
              &nbsp; New Article
            </router-link>
          </li>

          <li class="navbar__item">
            <router-link class="nav-link" :to="{name: 'settings'}">
              <i class="ion-gear-a" />
              &nbsp; Settings
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link
              class="navbar__link"
              :to="{name: 'userProfile', params: {slug: currentUser.username}}"
            >
              <img class="user-pic" :src="currentUser.image" />
              &nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="navbar__item">
            <router-link class="navbar__link" :to="{name: 'login'}">
              Sign in
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" :to="{name: 'register'}">
              Sign up
            </router-link>
          </li>
        </template>
      </ul>
  </nav>
  </div>
   </header>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    })
  }
}
</script>

<style lang="scss">
.header {
  background: #A1D6E2;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
}

.navbar {
  &__list {
    display: flex;
    list-style: none;
  }

  &__item {
    margin-right: .5rem;
  }
}
</style>
