import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../../components';
import { fetchDataAction } from '../../redux/actions/dataAction';
import { getPageData, getPageTitle, getTotalDataCount } from '../../redux/selectors/dataSelectors';
import SearchIcon from './search.png';
import './style.css';

const Home = props => {
    const dispatch = useDispatch();
    const title = useSelector(getPageTitle);
    const data = useSelector(getPageData);
    const totalCount = useSelector(getTotalDataCount);

    const [currentPage, setCurrentPage] = useState(0);

    const fetchNextPage = () => {
        const nextPage = currentPage + 1;
        // Load the next page of data
        dispatch(fetchDataAction(nextPage));
        setCurrentPage(nextPage);
    };

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            fetchNextPage();
        }
    };

    // lazi pagination
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "100px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, options);
        // Lazily fetch 
        if (!data.length || data.length < totalCount) {
            observer.observe(document.querySelector("#end-of-data"));
        }

        return () => {
            observer.disconnect();
        };
    }, [data]);

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
            <div id='end-of-data' />
        </div>
    )
}

Home.propTypes = {}

export default Home