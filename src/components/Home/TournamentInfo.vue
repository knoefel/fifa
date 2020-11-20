<template>
  <div class="tournament-info">
    <Countdown :end="tournament.start" />
    <v-list class="px-6 py-4">
      <v-list-item class="date-list">
        <v-list-item-content>
          <v-row no-gutters>
            <v-col class="flex-grow-0 pt-2 pr-8">
              <span class="text-uppercase text-caption white--text">Start</span>
              <v-list-item-subtitle class="start-date text-h6 white--text">
                {{ formatDate(tournament.start) }}
              </v-list-item-subtitle>
            </v-col>
            <v-col class="pt-2">
              <span class="text-uppercase text-caption white--text">End</span>
              <v-list-item-subtitle class="text-h6 white--text">
                {{ formatDate(tournament.end) }}
              </v-list-item-subtitle>
            </v-col>
          </v-row>
          <v-list-item-title class="text-subtitle-2">Tournament dates</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="text-h6 white--text">{{ tournament.numberOfTeams }} Teams</v-list-item-subtitle>
          <v-list-item-title class="text-subtitle-2">Number of teams</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="text-h6 white--text">{{ tournament.numberOfStadiums }} Stadiums</v-list-item-subtitle>
          <v-list-item-title class="text-subtitle-2">Number of stadiums</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="text-h6 white--text">{{ tournament.currentChampion }}</v-list-item-subtitle>
          <v-list-item-title class="text-subtitle-2">Current champion of the tournament</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import formatWithOptions from "date-fns/fp/formatWithOptions";
import { de, enGB as en } from "date-fns/esm/locale";
import Countdown from "@/components/Home/Countdown";

const LOCALES = { de, en };

export default {
  name: "TournamentInfo",
  components: { Countdown },
  props: {
    tournament: {
      type: Object,
    },
  },
  computed: {
    i18nDate() {
      return formatWithOptions({ locale: LOCALES[this.$vuetify.lang.current] }, "LLL dd, yyyy");
    },
  },
  methods: {
    formatDate(date) {
      return this.i18nDate(date);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

$yellow-text: #FECB2F;

.v-list-item__title {
  white-space: initial !important;
  color: $yellow-text !important;
}

.v-list {
  height: 100%;
  background: linear-gradient(to bottom, #0087E4 19.7%, rgba(0, 135, 230, 0) 120%);
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .v-list {
    display: block;
  }
}

@media #{map-get($display-breakpoints, 'xl-only')} {
}
</style>
