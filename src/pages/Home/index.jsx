import React from 'react';
import { List } from '../../components';
import SearchIcon from './search.png';
import './style.css';

const Home = props => {
    const data = Array(50).fill({});
    return (
        <div className='pt-20'>
            <header className='header fixed top-0 left-0 right-0 flex items-center h-20'>
                <div className="container mx-auto px-[1.875rem]">
                    <div className="flex justify-between ">
                        <span className='text-xl'>Title</span>
                        <div><img src={SearchIcon} className="h-6 w-6 " /></div>
                    </div>
                </div>
            </header>
            <List data={data} />
        </div>
    )
}

Home.propTypes = {}

export default Home