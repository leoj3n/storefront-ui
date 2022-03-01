<template>
  <div id="playground">
    <SFYourDevice :morph-on-click="true" :device="tablet">
      <div
        style="
          background: white;
          width: 100%;
          height: 100%;
          text-align: center;
          padding-top: 30%;
          font-family: cursive;
        "
      >
        Peace and Love
      </div>
    </SFYourDevice>
    <SFYourDevice :morph-on-click="true" :morph-interval="2000">
      <div
        style="
          width: 100%;
          height: 100%;
          background: url(https://images.unsplash.com/photo-1646019763727-dd6edf78f07e)
            no-repeat center black;
          background-size: contain;
        "
      ></div>
    </SFYourDevice>
    <SFYourDevice :morph-on-click="true">
      <iframe
        src="https://voices.org.ua/en/"
        style="pointer-events: none"
        width="100%"
        height="100%"
      ></iframe>
    </SFYourDevice>
  </div>
</template>

<script>
import SFYourDevice from "../src/components/molecules/SfYourDevice/SfYourDevice.vue";

// Use this component to play with other components
export default {
  components: {
    SFYourDevice,
  },
};
</script>
