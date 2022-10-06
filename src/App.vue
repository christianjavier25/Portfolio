<template>
  <div id="app">
    <myPages/>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import myPages from "./components/myPage.vue";
export default {
  components: { myPages },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
}
</style>
