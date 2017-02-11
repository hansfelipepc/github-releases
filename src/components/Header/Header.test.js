import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

//Definimos escenario
describe('Header', () => {
    it('Should render the header of the page', () => {
        const header = shallow(<Header/>); //nos da instancia de Header

        //Comprobamos que la propiedad text diga tal cosa.
        expect(header.text()).toEqual('Github Releases');

        //Comprobamo que contenga un h1
        expect(header.find('h1').length).toEqual(1);
    })
});