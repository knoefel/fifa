<template>
  <div class="home d-xl-flex flex-xl-column">
    <HomeNav :tournament="tournament" />
    <v-row no-gutters class="flex-column flex-xl-row">
      <v-col class="mt-10 my-lg-10 my-xl-16" xl="6">
        <v-row no-gutters class="flex-column">
          <v-col lg="9" xl="12">
            <h1
              class="title text-h3 text-sm-h2 text-lg-h1 text-xl-h1 text-center text-lg-left text-xl-center font-weight-bold white--text pb-lg-6 pl-lg-6"
            >
              {{ tournament.title }}
            </h1>
          </v-col>
          <v-col class="my-10 my-xl-16 text-center d-lg-none d-xl-block"> <SeeMoreButton /> </v-col>
        </v-row>
      </v-col>
      <v-col md="9" lg="12" xl="5" class="align-self-md-center">
        <v-row>
          <v-col class="d-none d-lg-block d-xl-none text-center align-self-center">
            <SeeMoreButton />
          </v-col>
          <v-col class="align-self-xl-start">
            <TournamentInfo :tournament="tournament" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TournamentInfo from "@/components/Home/TournamentInfo";
import HomeNav from "@/components/Home/HomeNav";
import SeeMoreButton from "../components/Home/SeeMoreButton.vue";
import { tournament } from "@/mocks/tournament";

export default {
  name: "Home",
  components: { TournamentInfo, HomeNav, SeeMoreButton },
  data: () => ({ tournament }),
};
</script>

<style lang="scss">
.home {
  height: 100%;
  background-image: url("../assets/home-background.jpg");
  background-position: center;
  background-size: cover;
  max-width: 100%;

  .title {
    font-family: "Qatar2022" !important;
  }
}
</style>
