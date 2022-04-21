import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import {createPinia} from "pinia";
import TestedComponent from "./HomeView.vue";
import router from "@/router";

describe("Pagination.vue", () => {
    it("shoud renders properly", () => {
        const wrapper = mount(TestedComponent, {
            global: {
                plugins: [router, createPinia()]
            }
        });

        expect(wrapper.exists()).toBeTruthy();
    });
});
