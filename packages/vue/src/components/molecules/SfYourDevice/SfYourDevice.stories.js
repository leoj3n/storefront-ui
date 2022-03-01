import SfYourDevice from "./SfYourDevice.vue";
//import { SfYourDevice } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/YourDevice",
  component: SfYourDevice,
  parameters: {
    docs: {
      description: {
        component:
          "The component for showing content in a representation of a user device (phone/tablet/laptop)",
      },
    },
  },
  argTypes: {
    //    device: {
    //      control: {
    //        type: "select",
    //        options: [
    //          "detect",
    //          "mobile",
    //          "tablet",
    //          "laptop",
    //        ],
    //      },
    //      table: {
    //        category: "Props",
    //        defaultValue: {
    //          summary: null,
    //        },
    //      },
    //      defaultValue: null,
    //      description: "Force default device to show or detect using media query",
    //    },
    device: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Default Device",
    },
    morphOnClick: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Whether morph should be triggered on click",
    },
    morphInterval: {
      control: "number",
      table: {
        category: "Props",
      },
      description:
        "If greater than 0, number of milliseconds between switching devices",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfYourDevice },
  props: Object.keys(argTypes),
  template: `
    <SFYourDevice
      :device="device"
      :morph-on-click="morphOnClick"
      :morph-interval="morphInterval">
      <iframe src="https://voices.org.ua/en/" style="pointer-events: none;" width="100%" height="100%"></iframe>
    </SFYourDevice>`,
});

export const Common = Template.bind({});
Common.args = {
  device: "tablet",
};
