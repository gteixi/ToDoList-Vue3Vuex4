import { mount } from '@vue/test-utils';
import Header from '../../src/components/Header.vue';
import router from '../../src/router/index';

describe('Given a Header component', () => {
    describe('When is rendered', () => {
        it('Should render a div tag', () => {
            const wrapper = mount(Header, {
                global: {
                  plugins: [router],
                },
              })
          
            expect(wrapper.html()).toContain('HOME')
          })
    })
})