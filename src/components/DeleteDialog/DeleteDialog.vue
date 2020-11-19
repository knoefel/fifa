<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title class="title pa-5 text-h6 font-weight-regular"
        >Are you sure you want to delete this item?</v-card-title
      >
      <v-card-actions>
        <v-row no-gutters class="pa-1 justify-end">
          <v-col class="flex-sm-grow-0">
            <v-btn :block="$vuetify.breakpoint.xsOnly" color="primary" outlined @click="close">Cancel</v-btn>
          </v-col>
          <v-col class="flex-sm-grow-0 ml-2 ml-sm-4">
            <v-btn :block="$vuetify.breakpoint.xsOnly" color="red" text @click="confirm">OK</v-btn>
          </v-col>
        </v-row>
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

<style lang="scss" scoped>
.title {
  word-break: normal;
}
</style>
