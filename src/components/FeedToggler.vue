<template>
    <ul class="feed-toggle">
      <li class="feed-toggle__item" v-if="isLoggedIn">
        <router-link
          :to="{name: 'yourFeed'}"
          class="nav-link"
          :class="{active: routeName === 'yourFeed'}"
        >
          Your feed
        </router-link>
      </li>

      <li class="feed-toggle__item">
        <router-link
          :to="{name: 'globalFeed'}"
          class="nav-link"
          :class="{active: routeName === 'globalFeed'}"
        >
          Global feed
        </router-link>
      </li>

      <li class="feed-toggle__item" v-if="tagName">
        <router-link
          :to="{name: 'tag'}"
          class="nav-link"
          :class="{active: routeName === 'tag'}"
        >
          <i class="ion-pound" />
          {{ tagName }}
        </router-link>
      </li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'

import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn
    }),
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.feed-toggle {
  padding: 0;
  display: flex;
  margin-right: 1rem;

  &__item {
    background: #feebef;
    box-shadow: 0 0px 0.1rem #aaa;
    margin-right: 1rem;
    border-radius: .5rem;
  }
}
</style>