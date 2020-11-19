<template>
  <v-form ref="form" v-model="isValid">
    <v-text-field v-model="formValues.name" label="Name" :rules="[rules.required]" filled></v-text-field>

    <v-select
      v-model="formValues.typeId"
      :items="functionalAreaTypes"
      item-text="name"
      item-value="id"
      label="Type"
      :rules="[rules.required]"
      filled
    ></v-select>

    <v-text-field
      v-model="formValues.refNumber"
      label="Reference Number"
      :rules="[rules.required]"
      filled
    ></v-text-field>

    <v-select
      v-model="formValues.parentEventIds"
      :items="functionalAreaParentEvents"
      label="Parent Event"
      multiple
      filled
    ></v-select>
  </v-form>
</template>

<script>
import { functionalAreaTypes, functionalAreaParentEvents } from "@/mocks/functionalAreas";

const defaultValues = {
  name: "",
  typeId: "",
  refNumber: "",
  parentEventIds: [],
};

export default {
  name: "FunctionalAreaForm",
  data: () => ({
    functionalAreaTypes,
    functionalAreaParentEvents,
    formValues: defaultValues,
    isValid: false,
    rules: { required: value => !!value || "Required" },
  }),
  props: { functionalArea: { type: Object, default: () => defaultValues } },
  watch: {
    formValues: {
      immediate: true,
      deep: true,
      handler() {
        this.validate();
      },
    },
    functionalArea: {
      immediate: true,
      handler() {
        this.formValues = { ...this.functionalArea };
      },
    },
  },
  methods: {
    async validate() {
      await this.$nextTick();

      const isValid = this.$refs.form.validate();
      const formValues = this.formValues;

      this.$emit("onFormChanged", { formValues, isValid });
    },
  },
};
</script>
