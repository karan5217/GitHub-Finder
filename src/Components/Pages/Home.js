import React,{Fragment} from 'react';
import Users from '../Users/Users';
import Search from '../Users/Search';

export const Home = () => {
    return (
        <Fragment>
            <Search/>
            <Users/>
        </Fragment>
    )
}
