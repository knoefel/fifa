<template>
  <div class="add-functional-area">
    <v-container>
      <v-card class="my-5">
        <v-row no-gutters class="pa-5" align="center">
          <v-col class="pb-3 pb-md-0" cols="12" md="6">
            <h3 class="font-weight-regular text-h5 table-title text-center text-md-left">
              Add Functional Area
            </h3>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-wrap flex-column flex-md-nowrap flex-md-row justify-end">
            <v-btn class="mr-md-3 mb-3 mb-md-0" outlined @click="onCancel" color="primary">
              Cancel
            </v-btn>
            <v-btn :disabled="!isValid" @click="onSave" color="primary">
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="mb-5">
        <v-row no-gutters class="pa-5">
          <v-col md="6">
            <FunctionalAreaForm @onFormChanged="onFormChanged" />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import functionalAreasService from "@/services/functionalAreas.service";
import FunctionalAreaForm from "../components/FunctionalAreaForm/FunctionalAreaForm.vue";

export default {
  components: { FunctionalAreaForm },
  name: "AddFunctionalArea",
  data: () => ({
    formValues: null,
    isValid: true,
  }),

  methods: {
    onFormChanged({ formValues, isValid }) {
      this.formValues = { ...formValues };
      this.isValid = isValid;
    },
    onCancel() {
      this.$router.push({ path: "/functional-areas" });
    },
    async onSave() {
      await functionalAreasService.create({
        ...this.formValues,
      });

      this.$router.push({ path: "/functional-areas" });
    },
  },
};
</script>
