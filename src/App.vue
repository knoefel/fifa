<template>
  <v-app>
    <Header :tournament="tournament" />

    <v-main> </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header/Header";
import { tournament } from "./mocks/tournament";

export default {
  name: "App",

  components: { Header },
  data: () => ({ tournament }),
};
</script>
