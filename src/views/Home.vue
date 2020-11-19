<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col class="white--text text-h1 col-8 font-weight-bold">
          <span>{{ tournament.title }}</span>
        </v-col>
        <v-col class="col-6">
          <v-btn to="/functional-areas" class="button-link">
            <span>See more </span>
            <v-img :src="require(`@/assets/icons/arrow-right.svg`)"></v-img>
          </v-btn>
        </v-col>
        <v-col class="col-6 tournament-info-container">
          <TournamentInfo :tournament="tournament" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TournamentInfo from "@/components/Header/TournamentInfo";
import { tournament } from "@/mocks/tournament";

export default {
  components: { TournamentInfo },
  name: "Home",
  data: () => ({ tournament }),
};
</script>

<style>
.home {
  height: 100%;
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
}

.button-link {
  width: 239px;
  height: 60px;
  clip-path: polygon(9% 0%, 100% 0%, 90% 100%, 0% 100%);
  display: flex;
  align-items: center;
  color: #ffffff;
  background: linear-gradient(93.61deg, #093697 0%, #0087e6 100%);
}

.button-link .v-btn__content {
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 90px;
  text-transform: none;
}

.button-link .v-image{
  max-width: 27px;
  max-height: 25px;
}

.tournament-info-container {
  height: 700px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
}
</style>
