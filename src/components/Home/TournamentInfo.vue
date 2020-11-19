<template>
  <div class="tournament-info">
    <Countdown :end="tournament.start" />
    <v-list>
      <v-container>
        <v-row>
          <v-list-item class="date-list">
            <v-list-item-content>
              <span class="date-title">Start</span>
              <v-list-item-subtitle class="start-date">
                {{ formatDate(tournament.start) }}
              </v-list-item-subtitle>
              <v-list-item-title v-if="$vuetify.breakpoint.lgAndUp">Tournament dates</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <span class="date-title">End</span>
              <v-list-item-subtitle>
                {{ formatDate(tournament.end) }}
              </v-list-item-subtitle>
              <v-list-item-title v-if="$vuetify.breakpoint.mdAndDown">Tournament dates</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-row>
        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>{{ tournament.numberOfTeams }}</v-list-item-subtitle>
              <v-list-item-title>Number of teams</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-row>
        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>{{ tournament.numberOfStadiums }}</v-list-item-subtitle>
              <v-list-item-title>Number of stadiums</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-row>
        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>{{ tournament.currentChampion }}</v-list-item-subtitle>
              <v-list-item-title>Current champion of the tournament</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-row>
      </v-container>
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
  height: 100%;
}

.theme--light.v-list-item .v-list-item {
  align-items: flex-start;

  &__title {
    white-space: initial;
    text-overflow: initial;
    font-size: 1rem;
    color: $yellow-text;
  }

  &__content {
    align-self: flex-start;
    color: #ffffff;
    transform: skewX(16deg);
    padding-left: 32px;
  }

  &__subtitle {
    color: #ffffff;
    font-size: 3rem;
  }
}

.start-date {
  min-width: 350px;
}

.date-title {
  text-transform: uppercase;
}

.theme--light.v-sheet.v-list {
  height: 100%;
  background: linear-gradient(168.99deg, #0087E4 25.7%, rgba(0, 135, 230, 0) 90.19%);
  mix-blend-mode: lighten;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .date-list {
    display: grid;
    margin-bottom: -40px;
  }

  .theme--light.v-list-item .v-list-item {
    &__content {
      transform: skewX(5deg);
    }

    &__subtitle {
      font-size: 2rem;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .v-list {
    display: block;
  }
}

@media #{map-get($display-breakpoints, 'xl-only')} {
  .v-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .tournament-info-container {
    height: 100vh;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .theme--light.v-list-item .v-list-item {
    &__title {
      font-size: 0.8rem;
    }

    &__subtitle {
      font-size: 1.5rem;
    }
  }
}
</style>
