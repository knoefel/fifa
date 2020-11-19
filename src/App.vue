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
@import "@/styles/overrides";

.v-main__wrap {
  overflow: hidden;
}
</style>
