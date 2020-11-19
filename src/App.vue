<template>
  <v-app>
    <Header :tournament="tournament" />
    <v-main class="grey lighten-5" :style="mainStyles">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header/Header";
import { tournament } from "./mocks/tournament";

export default {
  name: "App",
  components: { Header },
  data: () => ({ tournament }),
  computed: {
    mainStyles: () => ({
      backgroundImage: `url(${require("@/assets/background.png")})`,
      backgroundSize: "cover",
    }),
  },
};
</script>

<style lang="scss">
@import "@/styles/overrides";
</style>