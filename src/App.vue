<template>
  <v-app>
    <Header />
    <v-main :style="mainStyles">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header/Header";

export default {
  name: "App",
  components: { Header },
  computed: {
    mainStyles: () => ({
      backgroundImage: `url(${require("@/assets/background.png")})`,
      backgroundSize: "cover",
    }),
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Qatar2022";
  src: url("assets/fonts/Qatar2022Bold.otf");
}
</style>
