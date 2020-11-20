<template>
  <v-container class="functional-area pt-5 pt-sm-10">
    <v-btn class="text-none" text color="primary" @click="goBack">
      <v-icon left> mdi-chevron-left </v-icon>
      Back To Functional Areas
    </v-btn>
    <v-card class="my-3">
      <h3 class="pa-5 font-weight-regular text-h5">
        {{ title }}
      </h3>
    </v-card>
    <v-card class="mb-5">
      <v-row no-gutters class="pa-5">
        <v-col md="6">
          <FunctionalAreaForm :functionalArea="functionalArea" @onFormChanged="onFormChanged" />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-row no-gutters class="pa-4">
          <v-col class="flex-sm-grow-0 mr-3">
            <v-btn block depressed class="text-none" :disabled="!isValid" @click="onSave" color="primary"> Save </v-btn>
          </v-col>
          <v-col class="flex-sm-grow-0">
            <v-btn block class="text-none" outlined @click="onCancel" color="primary"> Cancel </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import functionalAreasService from "@/services/functionalAreas.service";
import { prop } from "ramda";
import FunctionalAreaForm from "../components/FunctionalAreaForm/FunctionalAreaForm.vue";

const getName = prop("name");

export default {
  components: { FunctionalAreaForm },
  name: "FunctionalArea",
  data() {
    return {
      functionalArea: null,
      formValues: null,
      isValid: true,
      isEditMode: !!this.$route.params.id,
    };
  },
  async mounted() {
    if (this.isEditMode) {
      this.functionalArea = await functionalAreasService.getById(this.$route.params.id);
    }
  },
  computed: {
    title() {
      return this.isEditMode ? getName(this.functionalArea) : "Add Functional Area";
    },
  },

  methods: {
    goBack() {
      this.$router.push({ path: "/functional-areas" });
    },
    onFormChanged({ formValues, isValid }) {
      this.formValues = { ...formValues };
      this.isValid = isValid;
    },
    onCancel() {
      this.$router.push({ path: "/functional-areas" });
    },
    async onSave() {
      if (this.isEditMode) {
        await functionalAreasService.update({
          ...this.functionalArea,
          ...this.formValues,
        });
      } else {
        await functionalAreasService.create({
          ...this.formValues,
        });
      }

      this.$router.push({ path: "/functional-areas" });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.v-card {
  box-shadow: $box-shadow !important;
}

.v-card__actions {
  border-top: 1px solid #f0f0f0;
}
</style>
