<template>
  <div class="sf-your-device">
    <div class="sf-your-device__wrapper">
      <div class="sf-your-device__morph" @click="clicked">
        <div class="sf-your-device__screen">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const devices = ["mobile", "tablet", "laptop", "detect"];

export default {
  name: "SfYourDevice",
  props: {
    device: {
      type: String,
      default: "detect",
      validator: (propValue) => {
        return devices.includes(propValue);
      },
    },
    morphOnClick: {
      type: Boolean,
      default: false,
    },
    morphInterval: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      i: 0,
      morphEl: null,
      intervalID: -1,
      devices: devices,
      classes: [
        "sf-your-device__mobile",
        "sf-your-device__tablet",
        "sf-your-device__laptop",
      ],
    };
  },
  mounted() {
    this.morphEl = this.$el.querySelector(".sf-your-device__morph");

    if (this.device === "detect") {
      if (typeof window.matchMedia !== "undefined") {
        const isMobile = window.matchMedia(
          "only screen and (max-width: 480px)"
        ).matches;
        const isTablet = window.matchMedia(
          "only screen and (max-width: 768px)"
        ).matches;

        if (isMobile) {
          this.i = 0;
        } else if (isTablet) {
          this.i = 1;
        } else {
          this.i = 2;
        }
      } else {
        this.i = 2;
      }
    } else {
      this.i = this.devices.indexOf(this.device);
    }

    this.morphEl.classList.add(this.classes[this.i]);

    if (this.morphInterval > 0 && !this.morphOnClick) {
      this.toggleMorph();
    }
  },
  methods: {
    clicked() {
      this.morphOnClick && this.toggleMorph();
    },
    toggleMorph() {
      if (this.morphInterval > 0) {
        if (this.intervalID === -1) {
          this.morph();
          this.intervalID = setInterval(this.morph, this.morphInterval);
        } else {
          clearInterval(this.intervalID);
          this.intervalID = -1;
        }
      } else {
        this.morph();
      }
    },
    morph() {
      this.morphEl.className = "";

      if (this.i > this.classes.length - 2) {
        this.i = 0;
      } else {
        this.i++;
      }

      this.morphEl.classList.add(this.classes[this.i]);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfYourDevice.scss";
</style>
