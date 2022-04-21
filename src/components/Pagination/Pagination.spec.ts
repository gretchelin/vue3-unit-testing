import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import TestedComponent from "./Pagination.vue";

describe("Pagination.vue", () => {
    beforeEach(() => {
        // anything in here will be run before each test
    })

    it("shoud renders properly", () => {
        const wrapper = mount(TestedComponent);

        expect(wrapper.exists()).toBeTruthy();
    });

    // nested describe allowed scoped setup
    // making a more specific setup to prepare the tested component for a specific test
    // this is useful when dealing with vuex/pinia state, which maybe require different value for certain test
    describe('Next Button', () => {
        beforeEach(() => {
            // this will be called for each test under this `describe` scope
            // after `beforeEach` on outer `describe`
        });

        it('should render showNext is true', () => {
            const wrapper = mount(TestedComponent, {
                propsData: {
                    showNext:true
                }
            });

            const logo = wrapper.find('[data-qa="btn-next"]');
            expect(logo.exists()).toBeTruthy();
        });

        it('should NOT render if showNext is false', () => {
            const wrapper = mount(TestedComponent, {
                propsData: {
                    showNext:false
                }
            });

            const logo = wrapper.find('[data-qa="btn-next"]');
            expect(logo.exists()).toBeFalsy();
        });
    });
});
