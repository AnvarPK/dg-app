import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, SearchPlate } from '../../components';
import Header from '../../Layouts/Header';
import { fetchDataAction, resetData } from '../../redux/actions/dataAction';
import { getPageData, getPageTitle, getTotalDataCount } from '../../redux/selectors/dataSelectors';
import './style.css';

const Home = props => {
    const dispatch = useDispatch();
    const title = useSelector(getPageTitle);
    const data = useSelector(getPageData);
    const totalCount = useSelector(getTotalDataCount);

    const [currentPage, setCurrentPage] = useState(0);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const fetchNextPage = () => {
        const nextPage = currentPage + 1;
        // Load the next page of data
        dispatch(fetchDataAction(nextPage, searchInput));
        setCurrentPage(nextPage);
    };

    // handle for Intersection
    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            fetchNextPage();
        }
    };

    const searchShowHandler = () => {
        const val = !showSearch;
        setShowSearch(val);
        if (!val) {
            setSearchInput('');
            setCurrentPage(0);
            dispatch(resetData());
        }

    }

    const searchHandler = (val) => {
        setSearchInput(val);
        setCurrentPage(0);
        dispatch(resetData());
    }

    // lazy pagination
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
    }, [data, searchInput]);

    return (
        <div className='pt-20'>
            <Header
                title={title}
                searchShowHandler={searchShowHandler}
            />
            {showSearch && <SearchPlate searchHandler={searchHandler} />}
            <List data={data} />
            <div id='end-of-data' />
        </div>
    )
}

Home.propTypes = {}

export default Home