<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title class="text-h6">Are you sure you want to delete this item?</v-card-title>
      <v-card-actions class="align-end">
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="confirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteDialog",
  props: { open: { type: Boolean } },
  computed: {
    show: {
      get() {
        return this.open;
      },
      set(value) {
        if (!value) {
          this.$emit("closed");
        }
      },
    },
  },
  methods: {
    close() {
      this.show = false;
    },
    confirm() {
      this.$emit("confirmed");
    },
  },
};
</script>
