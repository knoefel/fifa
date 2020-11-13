<template>
  <div class="tournament-info">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Tournament dates</v-list-item-title>
          <v-list-item-subtitle
            >{{ formatDate(tournament.start) }} -
            {{ formatDate(tournament.end) }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Number of teams</v-list-item-title>
          <v-list-item-subtitle>{{
            tournament.numberOfTeams
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Number of stadiums</v-list-item-title>
          <v-list-item-subtitle>{{
            tournament.numberOfStadiums
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            >Current champion of the tournament</v-list-item-title
          >
          <v-list-item-subtitle>{{
            tournament.currentChampion
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import formatWithOptions from "date-fns/fp/formatWithOptions";
import { de, enGB as en } from "date-fns/esm/locale";

const LOCALES = { de, en };

export default {
  name: "TournamentInfo",
  props: {
    tournament: {
      type: Object,
    },
  },
  computed: {
    i18nDate() {
      return formatWithOptions(
        { locale: LOCALES[this.$vuetify.lang.current] },
        "P"
      );
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

$body2: map-get($headings, "body-2");

.v-list-item__title {
  white-space: initial;
  text-overflow: initial;
  font-size: #{map-get($body2, "size")};
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .v-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
}
</style>
