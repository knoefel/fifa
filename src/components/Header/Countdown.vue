<template>
  <div class="countdown">
    <div class="countdown__box" v-for="[label, value] in duration" :key="label">
      <div class="square">
        <v-sheet class="square__content" rounded="lg">
          <svg viewBox="0 0 40 40">
            <text x="2" y="31" class="white--text">{{ value }}</text>
          </svg>
        </v-sheet>
      </div>
      <div class="text-caption text--secondary text-center text-capitalize">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
import intervalToDuration from "date-fns/fp/intervalToDuration";
import { pipe, toPairs, pick, map, toString } from "ramda";

const MILLISECONDS = 30000;

export default {
  name: "Countdown",
  props: {
    end: {
      type: Date,
    },
  },
  data: () => ({
    duration: [],
    intervalId: null,
  }),
  watch: {
    end: {
      immediate: true,
      handler() {
        clearInterval(this.intervalId);

        this.intervalId = setInterval(this.updateDuration, MILLISECONDS);

        this.updateDuration();
      },
    },
  },
  methods: {
    calculateDuration: pipe(
      intervalToDuration,
      pick(["years", "months", "days", "hours"]),
      map(toString),
      map(value => value.padStart(2, "0")),
      toPairs,
    ),
    updateDuration() {
      this.duration = this.calculateDuration({
        start: new Date(),
        end: this.end,
      });
    },
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  justify-content: center;
  background: $blue-background;

  &__box {
    flex-basis: calc(25% - 10px);
    margin: 5px;
    min-height: 3rem;
    min-width: 3rem;
    max-width: 4rem;
  }
}

.square {
  position: relative;

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 2rem;
    font-weight: 400;

    & > svg {
      width: 100%;
    }
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}

.theme--light.v-sheet {
  background: $blue-background;
}
</style>
