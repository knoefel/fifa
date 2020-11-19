<template>
  <v-container class="header-title" fluid>
    <v-row class="ma-0">
      <v-col class="col-1 d-flex align-center">
        <v-icon class="icon">mdi-menu</v-icon>
      </v-col>
      <v-col class="flex-grow-0 d-flex align-center">
        <v-img class="logo" :src="require(`@/assets/fifa-logo.svg`)"></v-img>
      </v-col>

      <v-col class="d-flex align-center justify-end">
        <v-icon class="icon">mdi-account-outline</v-icon>
        <v-icon class="icon">mdi-magnify</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderTitle",
};
</script>

<style lang="scss" scoped>
.header-title > .row {
  background-color: rgba(255, 255, 255, 1);
}

.header-title {
  min-height: 64px;
  padding-left: 64px;
  padding-right: 64px;
}

.logo {
  max-width: 128px;
  max-height: 23px;
}

.icon {
  max-height: 16px;
  max-width: 16px;
  margin-left: 15px;
  margin-right: 15px;

  &:before {
    color: $icon-color;
  }
}
</style>
