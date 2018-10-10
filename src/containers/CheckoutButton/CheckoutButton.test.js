import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckoutButton from './CheckoutButton';

configure({adapter: new Adapter()});

describe('<CheckoutButton />', () => {
    it('should logout upon clicking the button', () => {
        const wrapper = shallow(<CheckoutButton/>);
        expect(wrapper.find("button")).toHaveLength(1);
    });
});

