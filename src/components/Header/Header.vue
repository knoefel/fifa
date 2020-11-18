<template>
  <v-row no-gutters class="header flex-grow-0">
    <v-col cols="12" lg="7">
      <HeaderTitle :title="tournament.title" :trophy="tournament.trophy" />
    </v-col>

    <v-col cols="12" lg="5">
      <HeaderDetails :tournament="tournament" />
    </v-col>
  </v-row>
</template>

<script>
import HeaderTitle from "./HeaderTitle";
import HeaderDetails from "./HeaderDetails";

export default {
  name: "Header",
  props: {
    tournament: {
      type: Object,
    },
  },
  components: {
    HeaderTitle,
    HeaderDetails,
  },
};
</script>
