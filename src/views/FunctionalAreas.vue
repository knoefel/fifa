<template>
  <div class="functional-areas">
    <v-container>
      <v-card class="my-5">
        <v-row no-gutters class="pa-5" align="center">
          <v-col class="pb-3 pb-md-0" cols="12" md="6">
            <h3
              class="font-weight-regular text-h5 table-title text-center text-sm-left"
            >
              Functional Areas
            </h3>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-wrap flex-sm-nowrap">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              outlined
              hide-details
              dense
              class="pr-sm-3 pb-3 pb-sm-0"
            ></v-text-field>
            <v-btn class="create-btn" color="primary"> Create </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card>
        <FunctionalAreasTable
          :functionalAreas="functionalAreas"
          :search="search"
          @editItem="onEditItem"
          @deleteItem="onDeleteItem"
        />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import functionalAreasService from "@/services/functionalAreas.service";
import FunctionalAreasTable from "@/components/FunctionalAreasTable/FunctionalAreasTable.vue";

export default {
  components: { FunctionalAreasTable },
  name: "FunctionalAreas",
  data: () => ({
    functionalAreas: [],
    search: "",
  }),

  async created() {
    this.functionalAreas = await functionalAreasService.getAll();
  },

  methods: {
    async refreshItems() {
      this.functionalAreas = await functionalAreasService.getAll();
    },

    onEditItem(item) {
      this.$router.push({ path: `/functional-areas/${item.id}` });
    },

    async onDeleteItem(item) {
      await functionalAreasService.delete(item.id);

      this.refreshItems();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.create-btn {
  min-height: 40px;
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .create-btn {
    min-width: 100% !important;
  }
}
</style>
