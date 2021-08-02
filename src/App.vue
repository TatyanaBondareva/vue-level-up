<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body {
    margin: 0;
    box-sizing: border-box; 
    font-family: Roboto;
    background-color: #F1F1F2;
}

a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #1995AD;
    font-weight: normal;
    padding: .5rem;
    border-radius: .5rem;
    display: inline-block;
}

a:hover {
    color: #000;
}

ul {
    list-style: none;
}

.container {
  max-width: 1170px;
  margin: auto;
}

img.user-pic {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.form {
  display: flex;
  flex-direction: column;

  &__input {
    padding: .8rem;
    border: 1px solid #BCBABE;
    border-radius: .2rem;
    margin-bottom: 1rem;
  }

  &__button {
    max-width: 300px;
    padding: 1rem .5rem;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    background: #1995AD;
    border-radius: .15rem;
    cursor: pointer;
  }
}

.button {
  max-width: 300px;
  padding: 1rem .5rem;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  background: #BCBABE;
  border-radius: .15rem;
  cursor: pointer;
}

.navbar__link {
  display: flex;
}
</style>