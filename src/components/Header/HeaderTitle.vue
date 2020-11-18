<template>
  <v-container class="header-title white--text pa-0" :style="containerStyles" fluid>
    <v-row class="ma-0">
      <v-col class="flex-grow-0">
        <v-avatar size="50">
          <v-img :src="require(`@/assets/trophies/${trophy}`)"></v-img>
        </v-avatar>
      </v-col>

      <v-col class="d-flex align-center text-h5">
        <span>{{ title }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
    },
    trophy: {
      type: String,
    },
  },
  computed: {
    containerStyles: () => ({
      height: "100%",
      minHeight: "10rem",
      backgroundImage: `url(${require("@/assets/header-title-background.png")})`,
      backgroundSize: "cover",
    }),
  },
};
</script>

<style lang="scss" scoped>
.header-title > .row {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
