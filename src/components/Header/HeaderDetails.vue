<template>
  <v-container class="header-details pa-2" fluid>
    <v-row no-gutters>
      <v-col>
        <Countdown :end="tournament.start" />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="pa-3">
        <TournamentInfo :tournament="tournament" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Countdown from "./Countdown";
import TournamentInfo from "./TournamentInfo";

export default {
  name: "HeaderDetails",
  components: {
    Countdown,
    TournamentInfo
  },
  props: {
    tournament: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
  .header-details {
    height: 100%;
    background-color: #EEEEEE;
  }
</style>