<template>
  <div class="functional-area">
    <v-container>
      <v-card class="my-5">
        <v-row no-gutters class="pa-5" align="center">
          <v-col class="pb-3 pb-md-0" cols="12" md="6">
            <h3
              class="font-weight-regular text-h5 table-title text-center text-sm-left"
            >
              {{ title }}
            </h3>
          </v-col>
        </v-row>
      </v-card>
      <v-card> </v-card>
    </v-container>
  </div>
</template>

<script>
import functionalAreasService from "@/services/functionalAreas.service";
import { prop } from "ramda";

const getName = prop("name");

export default {
  name: "FunctionalArea",
  data: () => ({
    functionalArea: null,
  }),
  async mounted() {
    this.functionalArea = await functionalAreasService.getById(
      this.$route.params.id
    );
  },
  computed: {
    title() {
      return getName(this.functionalArea);
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
</style>
