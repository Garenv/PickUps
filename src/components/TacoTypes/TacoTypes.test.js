import React from 'react';
import { TacoTypes } from './TacoTypes';
import PayModal from '../../components/PayModal/PayModal';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<TacoTypes/>', () => {
    it('should render PayModal', () => {
       let wrapper = shallow(<TacoTypes/>);
       expect(wrapper.find(PayModal)).toHaveLength(1);
       console.log("ERROR IS HERE " + wrapper.debug());
    });
});