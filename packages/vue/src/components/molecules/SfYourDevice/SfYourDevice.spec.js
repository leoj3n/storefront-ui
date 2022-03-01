import { shallowMount } from "@vue/test-utils";
import SfYourDevice from "./SfYourDevice.vue";

describe("SfYourDevice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfYourDevice);
    expect(component.contains(".sf-your-device")).toBe(true);
  });
});
