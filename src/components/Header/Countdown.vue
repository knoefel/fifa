<template>
  <div class="countdown">
    <v-container>
      <v-row class="justify-center">
        <v-list v-for="[label, value] in duration" :key="label">
          <v-list-item-content>
            <v-list-item-title class="countdown__value white--text align-center">
              {{ value }} <span v-if="label !== 'hours'">:</span>
            </v-list-item-title>
            <v-list-item-subtitle class="countdown__label white--text align-center">
              {{ label }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list>
      </v-row>
    </v-container>
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
  background: $blue-background;

  & .v-list-item__content {
    transform: skewX(16deg);
  }

  & .countdown {
    &__value {
      font-size: 3rem;
    }

    &__label {
      font-size: 1rem;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.4);
    }
  }
}

.theme--light.v-sheet {
  background: $blue-background;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .countdown {
    .v-list-item__content {
      transform: skewX(5deg);
      max-width: 80px;
    }

    .countdown {
      &__value {
        font-size: 2rem;
      }

      &__label {
        font-size: 0.8rem;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .countdown .v-list-item__content {
    max-width: 60px;
  }

  .countdown .countdown-value {
    font-size: 1.5rem;
  }

  .countdown .countdown-label {
    font-size: 0.7rem;
  }
}
</style>
