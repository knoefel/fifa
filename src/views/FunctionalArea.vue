<template>
  <div class="functional-area">
    <v-container>
      <v-card flat class="mt-5 mb-3">
        <h3 class="pa-5 font-weight-regular text-h5">
          {{ title }}
        </h3>
      </v-card>
      <v-card flat class="mb-5">
        <v-row no-gutters class="pa-5">
          <v-col md="6">
            <FunctionalAreaForm :functionalArea="functionalArea" @onFormChanged="onFormChanged" />
          </v-col>
        </v-row>

        <v-card-actions>
          <v-row no-gutters class="pa-4">
            <v-col class="flex-sm-grow-0 mr-2 mr-sm-4">
              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="text-none"
                :disabled="!isValid"
                @click="onSave"
                color="primary"
              >
                Save
              </v-btn>
            </v-col>
            <v-col class="flex-sm-grow-0">
              <v-btn :block="$vuetify.breakpoint.xsOnly" class="text-none" outlined @click="onCancel" color="primary">
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
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
  border-top: 1px solid #F0F0F0;
}
</style>
