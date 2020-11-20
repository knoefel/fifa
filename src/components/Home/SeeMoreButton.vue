<template>
  <v-btn class="see-more-button white--text text-none px-8 py-6 px-lg-12 py-lg-8" to="/functional-areas">
    See more
    <v-icon right> mdi-arrow-right </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "SeeMoreButton",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

$yellow: #FECB2F;

.see-more-button {
  transform-origin: bottom right;
  background: linear-gradient(93.61deg, #093697 0%, $blue-background 100%);

  & .v-icon {
    color: $yellow !important;
  }
}
</style>
