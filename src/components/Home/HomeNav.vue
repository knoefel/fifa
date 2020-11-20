<template>
  <v-container class="home-nav white--text pb-0" fluid>
    <v-row no-gutters class="flex-nowrap">
      <v-col class="flex-grow-0 mr-3 mx-md-3">
        <v-img class="trophy" :src="require(`@/assets/trophies/${tournament.trophy}`)"></v-img>
      </v-col>
      <v-col class="details">
        <v-row no-gutters class="flex-column">
          <v-col cols="12" class="text-subtitle-1 text-md-h5 font-weight-bold">
            <span>{{ tournament.title }}</span>
          </v-col>
          <v-col cols="12" class="text-caption text-md-subtitle-1 font-weight-bold">
            <span>{{ formatDate(tournament.start) }} - {{ formatDate(tournament.end) }}</span>
          </v-col>
          <v-col cols="12" class="d-none d-lg-block flex-grow-0"> <Nav /> </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-lg-none justify-center justify-md-start">
      <v-col class="flex-grow-0">
        <Nav />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formatWithOptions from "date-fns/fp/formatWithOptions";
import { de, enGB as en } from "date-fns/esm/locale";
import Nav from "@/components/Nav/Nav";

const LOCALES = { de, en };

export default {
  name: "HeaderDetails",
  components: { Nav },
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

<style lang="scss">
.home-nav {
  background: linear-gradient(185.42deg, #9a0e35 46.64%, #2c000f 142.67%);
}

.trophy {
  height: 60px;
  width: 60px;
}

.details {
  min-width: 0;
  flex-basis: 100%;
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .trophy {
    height: 86px;
    width: 86px;
  }
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .v-tab:first-child {
    padding-left: 0 !important;
  }
}
</style>
