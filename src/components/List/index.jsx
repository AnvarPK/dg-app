import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem';

const List = props => {
    const { data } = props;
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5  gap-x-[1.875rem] gap-y-[2rem]">
            {data.map((data, i) => <>
                <ListItem key={i} />
            </>)}
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array,
}

List.defaultProps = {
    data: [],
};

export default List