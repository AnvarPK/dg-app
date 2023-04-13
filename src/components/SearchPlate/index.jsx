import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useDebounce from '../../useHooks/useDebounce';

// search box template is from tailwind-elements.com
const SearchPlate = props => {
    const { searchHandler } = props;
    const [inputData, setInputData] = useState(null);
    const debouncedValue = useDebounce(inputData);

    const changeHandler = (e) => {
        const { value } = e.target;
        setInputData(value);
    }

    useEffect(() => {
        searchHandler(debouncedValue)
    }, [debouncedValue])

    return (
        <div className='fixed top-0 left-0 right-0 flex items-center p-5  mt-20'>
            <div className="container mx-auto px-[1.875rem]">
                <div className="relative">
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="Search Data"
                        value={inputData}
                        onChange={changeHandler}
                    />
                </div>
            </div>
        </div>
    )
}

SearchPlate.propTypes = {}

export default SearchPlate