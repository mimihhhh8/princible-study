<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

  methods: {
    handleClick() {
      this.$store.commit("increment");
      console.log(this.$store.state.count, "hhahah");
    },
  },
};
</script>
