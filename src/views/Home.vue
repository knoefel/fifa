<template>
  <div class="home">
    <HomeNav :tournament="tournament" />
    <v-container class="home-container">
      <v-row>
        <v-col cols="12" lg="8" xl="6" class="justify-center white--text text-h1 font-weight-bold tournament-title">
          <span>{{ tournament.title }}</span>
        </v-col>
      </v-row>
      <v-row class="tournament-info-row">
        <v-col cols="12" lg="2" xl="6" class="pa-0">
          <v-btn to="/functional-areas" class="button-link">
            <span>See more </span>
            <v-img :src="require(`@/assets/icons/arrow-right.svg`)"></v-img>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="10" xl="6" class="tournament-info-container">
          <TournamentInfo :tournament="tournament" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TournamentInfo from "@/components/Header/TournamentInfo";
import HomeNav from "@/components/Header/HomeNav";
import { tournament } from "@/mocks/tournament";

export default {
  components: { TournamentInfo, HomeNav },
  name: "Home",
  data: () => ({ tournament }),
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.home {
  height: 100%;
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
  max-width: 100%;
}

.home-container {
  overflow: hidden;
  padding-right: 32px;
  padding-left: 32px;
  margin-right: 0;
  height: 100%;
  max-width: 100%;
}

.tournament-title {
  margin-top: 64px;
  margin-bottom: 64px;
}

.button-link {
  width: 239px;
  min-height: 60px;
  display: flex;
  align-items: center;
  color: #ffffff;
  transform: skewX(-16deg);
  transform-origin: bottom right;
  background: linear-gradient(93.61deg, #093697 0%, $blue-background 100%);
}

.button-link .v-btn__content {
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 90px;
  text-transform: none;
  transform: skewX(16deg);
}

.button-link .v-image {
  max-width: 27px;
  max-height: 25px;
  margin-left: 10px;
}

.tournament-info-container {
  height: 700px;
  padding: 0;
  transform: skewX(-16deg);
  transform-origin: bottom right;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .tournament-info-container {
    height: 700px;
    padding: 0;
    transform: skewX(-5deg);
    transform-origin: bottom right;
  }

  .button-link {
    margin: 0 auto 64px auto;
    width: 320px;
  }
}

@media #{map-get($display-breakpoints, 'xl-only')} {
  .home-container {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .home-container {
    padding: 12px;
  }

  .button-link {
    margin: -32px auto 32px auto;
    width: 240px;
  }

  .tournament-title.text-h1 {
    font-size: 3rem !important;
  }
}
</style>
