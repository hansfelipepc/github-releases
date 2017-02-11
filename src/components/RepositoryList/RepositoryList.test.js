import React from 'react';
import { shallow } from 'enzyme';
import RepositoryList from './RepositoryList';


describe('RepositoryList', () => {

    it('Should render a loading message', () => {
        const repositoryList = shallow(
            <RepositoryList.WrappedComponent data={ [] } total={0} loading={true}
                queried={false} search={'test'}
            />
        );

        console.log(repositoryList.debug());
        expect(repositoryList.find('HintMessage').length).toEqual(1);
    })
});