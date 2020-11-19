<template>
  <div>
    <v-row no-gutters class="header flex-grow-0">
      <v-col>
        <HeaderTitle />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <HeaderDetails :tournament="tournament" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle";
import HeaderDetails from "./HeaderDetails";

export default {
  name: "Header",
  props: {
    tournament: {
      type: Object,
    },
  },
  components: {
    HeaderTitle,
    HeaderDetails,
  },
};
</script>
