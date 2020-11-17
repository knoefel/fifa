<template>
  <v-data-table
    :headers="headers"
    :items="functionalAreas"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <DeleteDialog
        :open="showDeleteDialog"
        @closed="onClosed"
        @confirmed="onConfirmed"
      />
    </template>
    <template v-slot:[`item.type`]="{ item }">
      <span>{{ getTypeName(item.typeId) }}</span>
    </template>
    <template v-slot:[`item.actions`]="{ item }" class="actions">
      <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <span>No Data</span>
    </template>
  </v-data-table>
</template>

<script>
import { functionalAreaTypes } from "@/mocks/functionalAreas";
import DeleteDialog from "@/components/DeleteDialog/DeleteDialog.vue";

export default {
  components: { DeleteDialog },
  name: "FunctionalAreasTable",
  props: {
    functionalAreas: {
      type: Array,
    },

    search: {
      type: String,
    },
  },
  data: () => ({
    headers: [
      { text: "Ref No.", value: "refNumber" },
      { text: "Name", value: "name" },
      { text: "Type", value: "type" },
      { align: "right", value: "actions" },
    ],
    showDeleteDialog: false,
    itemToBeDeleted: null,
  }),
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
    getTypeName(typeId) {
      const { name } = functionalAreaTypes.find(({ id }) => id === typeId);

      return name;
    },
    editItem(item) {
      this.$emit("editItem", item);
    },
    deleteItem(item) {
      this.showDeleteDialog = true;
      this.itemToBeDeleted = item;
    },
    onClosed() {
      this.showDeleteDialog = false;
    },
    onConfirmed() {
      this.$emit("deleteItem", this.itemToBeDeleted);
      this.showDeleteDialog = false;
      this.itemToBeDeleted = null;
    },
  },
};
</script>