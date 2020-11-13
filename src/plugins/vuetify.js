import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 375,
      sm: 578,
      md: 1200,
      lg: 1600,
    },
  },
});
