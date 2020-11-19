<template>
  <v-data-table
    class="functional-areas-table"
    :headers="headers"
    :items="functionalAreas"
    :search="search"
    mobile-breakpoint="0"
    :footer-props="footerProps"
  >
    <template v-slot:top>
      <DeleteDialog :open="showDeleteDialog" @closed="onClosed" @confirmed="onConfirmed" />
    </template>
    <template v-slot:[`item.type`]="{ item }">
      <span>{{ getTypeName(item.typeId) }}</span>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="actions">
        <v-icon class="ml-2" @click="editItem(item)" color="primary"> mdi-pencil-outline </v-icon>
        <v-icon class="ml-2 delete-btn" @click="deleteItem(item)"> mdi-delete-outline </v-icon>
      </div>
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
    showDeleteDialog: false,
    itemToBeDeleted: null,
  }),
  computed: {
    headers() {
      const refNumber = { text: "Ref No.", value: "refNumber", sortable: false };
      const name = { text: "Name", value: "name" };
      const type = { text: "Type", value: "type", sortable: false };
      const actions = { value: "actions", align: "right", sortable: false, width: 65 };

      if (this.$vuetify.breakpoint.xsOnly) {
        return [name, actions];
      } else if (this.$vuetify.breakpoint.smOnly) {
        return [name, type, actions];
      } else {
        return [refNumber, name, type, actions];
      }
    },
    footerProps() {
      const isMobile = this.$vuetify.breakpoint.smAndDown;

      return isMobile ? { itemsPerPageText: "Show:" } : {};
    },
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

<style lang="scss">
@import "@/styles/variables.scss";

$tr-hover-background: #F0F3F9;
$delete-icon-color: #D91313;

.functional-areas-table {
  background-color: transparent !important;

  table {
    border-spacing: 0 4px !important;

    th,
    td {
      border-bottom: none !important;
    }

    tr {
      background-color: white;
      box-shadow: $box-shadow !important;
    }

    tbody tr {
      &:hover {
        background: $tr-hover-background !important;
      }
    }
  }

  .actions {
    min-width: 65px;

    .delete-btn {
      color: $delete-icon-color !important;
    }
  }

  .v-data-footer {
    background-color: white;
    box-shadow: $box-shadow !important;
    border-top: none !important;
    margin-top: 3px;
    padding: 0 1rem;

    &__select {
      margin-right: auto !important;

      .v-input {
        margin-left: 16px !important;

        &__slot:before {
          border: none !important;
        }
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .v-data-footer__pagination {
    display: none !important;
  }
}
</style>
