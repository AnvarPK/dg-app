import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from './search.png';

const Header = props => {
    const { title, searchShowHandler } = props;
    return (
        <header className='header fixed top-0 left-0 right-0 flex items-center h-20'>
            <div className="container mx-auto px-[1.875rem]">
                <div className="flex justify-between ">
                    <span className='text-xl'>{title}</span>
                    <div>
                        <img
                            src={SearchIcon}
                            className="h-6 w-6 "
                            onClick={searchShowHandler}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    searchShowHandler: PropTypes.func.isRequired,
    title: PropTypes.string,
}

Header.defaultProps = {
    searchShowHandler: () => { },
    title: '',
}

export default Header