<template>
  <div class="functional-areas">
    <v-container>
      <v-card class="header mt-5 mb-3" flat>
        <v-row no-gutters class="pa-5" align="center">
          <v-col class="pb-3 pb-md-0 d-flex justify-space-between align-center" cols="12" md="6">
            <h3 class="font-weight-regular text-h5 table-title text-center text-sm-left">Functional Areas</h3>
            <v-icon color="primary" v-if="$vuetify.breakpoint.smAndDown" class="create-icon ml-2" @click="create"
              >mdi-plus-circle-outline</v-icon
            >
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-wrap flex-sm-nowrap flex-column flex-sm-row">
            <v-text-field
              v-model="search"
              label="Search"
              single-line
              filled
              hide-details
              solo
              flat
              dense
              class="search-field pr-md-3 pb-3 pb-sm-0"
            >
              <template v-slot:append> <v-icon color="primary">mdi-magnify</v-icon> </template>
            </v-text-field>
            <v-btn
              v-if="$vuetify.breakpoint.mdAndUp"
              class="create-btn text-none"
              color="primary"
              outlined
              to="/functional-areas/add"
              exact
            >
              Create
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <FunctionalAreasTable
        :functionalAreas="functionalAreas"
        :search="search"
        @editItem="onEditItem"
        @deleteItem="onDeleteItem"
      />
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
      this.$router.push({ path: `/functional-areas/edit/${item.id}` });
    },

    async onDeleteItem(item) {
      await functionalAreasService.delete(item.id);

      this.refreshItems();
    },
    create() {
      this.$router.push({ path: "/functional-areas/add" });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

$search-field-background-color: #f3f6f9;

.header {
  box-shadow: $box-shadow !important;
}

.create-btn {
  min-height: 40px;
}

.search-field {
  .v-input__slot {
    background-color: $search-field-background-color !important;
    border-radius: 0;
  }
}
</style>
