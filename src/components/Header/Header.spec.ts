import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TestedComponent from "./Header.vue";
import router from "@/router";

describe("Header", () => {
    it("shoud renders properly", () => {
        const wrapper = mount(TestedComponent, {
            global: {
                plugins: [router],
            },
        });

        expect(wrapper.exists()).toBeTruthy();
    });

    it('should render logo', () => {
        const wrapper = mount(TestedComponent, {
            global: {
                plugins: [router],
            },
        });

        const logo = wrapper.find('[data-qa="logo"]');
        expect(logo.exists()).toBeTruthy();
    });
});
