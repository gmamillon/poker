<template>
    <form action="POST" class="logForm" @submit.prevent="setUserName">
        <label class="logForm__label" for="username">Username</label>
        <input class="logForm__input" v-model="username" name="username" type="text" placeholder="username123">
        <button class="logForm__btn" type="submit">PLAY</button>
    </form>
</template>

<script>
export default {
  name: 'Log',
  data() {
      return {
          username: "",
      }
  },
  methods: {
      log() {
          const user = { username: this.username, };
          this.$store.dispatch("log", user);
      }
  }
  
}
</script>

<style lang="scss">

</style>
