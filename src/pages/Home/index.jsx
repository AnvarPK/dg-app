import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List } from '../../components';
import SearchIcon from './search.png';
import './style.css';

const Home = props => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(`/data/CONTENTLISTINGPAGE-PAGE1.json`);
        const { page: { title, 'content-items': { content} } } = response.data;
        console.log({ title, content })
        setTitle(title);
        setData(content);
        setLoading(false);
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='pt-20'>
            <header className='header fixed top-0 left-0 right-0 flex items-center h-20'>
                <div className="container mx-auto px-[1.875rem]">
                    <div className="flex justify-between ">
                        <span className='text-xl'>{title}</span>
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