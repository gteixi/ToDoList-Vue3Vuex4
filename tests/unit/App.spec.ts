import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import router from '../../src/router/index';

describe('Given a App component', () => {
    describe('When is rendered', () => {
        it('Should render a div tag', () => {
            const wrapper = mount(App, {
                global: {
                  plugins: [router],
                },
              })
          
            expect(wrapper.html()).toContain('<div class="header">')
          })
    })
})