<template>
  <header>
    <v-row class="header align-center justify-space-between justify-lg-end flex-grow-0 px-6 px-lg-12" no-gutters>
      <v-col class="flex-grow-0">
        <v-icon class="icon">mdi-menu</v-icon>
      </v-col>
      <v-col class="flex-grow-0 ml-lg-6 mr-lg-auto">
        <v-img class="logo" :src="require(`@/assets/fifa-logo.svg`)"></v-img>
      </v-col>

      <v-col class="flex-grow-0">
        <v-icon class="icon">mdi-account-outline</v-icon>
      </v-col>
    </v-row>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  min-width: 256px;
}
</style>
