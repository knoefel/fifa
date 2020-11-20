<template>
  <div class="countdown">
    <div class="countdown__box text-h4 text-lg-h3" v-for="[label, value] in duration" :key="label">
      <span class="font-weight-bold">
        {{ value }}
      </span>
      <div class="text-caption text-center text-uppercase">
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
  // background: $blue-background;
  color: white;
  margin-left: 40px;

  &__box {
    padding: 15px;
    position: relative;
    text-align: center;

    &:not(:first-child) {
      &:before {
        left: 0;
        content: "";
        display: block;
        position: absolute;
        height: 50%;
        width: 1px;
        background: radial-gradient(at left, white, transparent);
      }
    }
  }
}

.square {
  position: relative;
}

body {
  overflow: hidden;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .countdown {
    margin-left: 80px;

    .text-h4 {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
