<template>
  <v-app>
    <header :style="{ height: '80px', position: 'sticky', top: 0, backgroundColor: '#c4e9ff' }"></header>
    <v-main class="grey lighten-5" :style="mainStyles">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { tournament } from "./mocks/tournament";

export default {
  name: "App",
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