<template>
  <div class="tournament-info">
    <div class="tournament-info__background">
      <svg width="1305.4" height="454">
        <defs>
          <linearGradient id="svg-countdown-path" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0087E4" stop-opacity="1" />
            <stop offset="20%" stop-color="#0087E4" stop-opacity="0.8" />
            <stop offset="60%" stop-color="#0087E4" stop-opacity="0.3" />
          </linearGradient>
        </defs>
          <path class="d-sm-none" d="M 35 454 L 161 0 L 1305.4 0 L 1305.4 454 L 50 454 Z" fill="url(#svg-countdown-path)"></path>
          <path class="d-sm-none" d="M 161 0 L 1305.4 0 L 1305.4 90 L 136.5 90 L 161 0 Z" fill="#0087E4"></path>
          <path class="d-none d-sm-block" d="M 65 454 L 191 0 L 1305.4 0 L 1305.4 454 L 80 454 Z" fill="url(#svg-countdown-path)"></path>
          <path class="d-none d-sm-block" d="M 191 0 L 1305.4 0 L 1305.4 90 L 166.5 90 L 191 0 Z" fill="#0087E4"></path>
      </svg>
    </div>
    <Countdown :end="tournament.start" />
    <v-list class="px-6 py-4">
      <v-list-item class="tournament-info__item">
        <v-list-item-content>
          <v-row no-gutters>
            <v-col class="flex-grow-0 pt-2 pr-8 tournament-info__event-start">
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
      <v-list-item class="tournament-info__item">
        <v-list-item-content>
          <v-list-item-subtitle class="text-h6 white--text">{{ tournament.numberOfTeams }} Teams</v-list-item-subtitle>
          <v-list-item-title class="text-subtitle-2">Number of teams</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="tournament-info__item">
        <v-list-item-content>
          <v-list-item-subtitle class="text-h6 white--text"
            >{{ tournament.numberOfStadiums }} Stadiums</v-list-item-subtitle
          >
          <v-list-item-title class="text-subtitle-2">Number of stadiums</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="tournament-info__item">
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

.tournament-info {
  position: relative;
}

.tournament-info__background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin-left: -100px;
}

.tournament-info__item {
  &:nth-child(3) {
    margin-left: 20px;
  }
  &:nth-child(2) {
    margin-left: 40px;
  }
  &:nth-child(1) {
    margin-left: 60px;
  }
}

.v-list-item__title {
  white-space: initial !important;
  color: $yellow-text !important;
}

.v-list {
  height: 100%;
  background: transparent;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .tournament-info__event-start {
    margin-left: 20px;
  }
}
</style>
