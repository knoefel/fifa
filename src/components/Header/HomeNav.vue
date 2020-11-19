<template>
  <v-container class="header-details white--text grey lighten-3" fluid>
    <v-row no-gutters>
      <v-col cols="2" xl="1">
        <v-img class="trophy" :src="require(`@/assets/trophies/trophy.svg`)"></v-img>
      </v-col>
      <v-col cols="10" xl="11">
        <v-row class="text-h5 font-weight-bold">
          <span>{{ tournament.title }}</span>
        </v-row>
        <v-row class="font-weight-bold mb-4">
          <span>{{ formatDate(tournament.start) }} - {{ formatDate(tournament.end) }}</span>
        </v-row>
        <v-row class="d-flex justify-space-between navigation">
          <span>QUALIFIERS</span>
          <span>NEWS</span>
          <span>PHOTOS</span>
          <span>VIDEOS</span>
          <span>MATCHES</span>
          <span>TICKETING</span>
          <span>DESTINATION</span>
          <span>ORGANISATION</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formatWithOptions from "date-fns/fp/formatWithOptions";
import { de, enGB as en } from "date-fns/esm/locale";

const LOCALES = { de, en };

export default {
  name: "HeaderDetails",
  components: {},
  props: {
    tournament: {
      type: Object,
    },
  },
  computed: {
    i18nDate() {
      return formatWithOptions({ locale: LOCALES[this.$vuetify.lang.current] }, "dd LLLL");
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
.header-details {
  height: 116px;
  background: linear-gradient(185.42deg, #9a0e35 46.64%, #2c000f 142.67%);
}

.trophy {
  height: 86px;
  width: 86px;
}

.navigation {
  max-width: 900px;
}
</style>
