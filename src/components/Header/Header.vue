<template>
  <div>
    <v-row no-gutters class="header flex-grow-0">
      <v-col>
        <HeaderTitle />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle";

export default {
  name: "Header",
  props: {
    tournament: {
      type: Object,
    },
  },
  components: {
    HeaderTitle,
  },
};
</script>
