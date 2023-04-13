import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '..'
import { POST_PATH } from '../../app-const';

const ListItem = props => {
    const { data: { name, 'poster-image': image } } = props;

    return (
        <div title={name}>
            <div className="mb-1">
                <Image
                    src={`${POST_PATH}${image}`}
                />
            </div>
            <p className="text-lg truncate">{name}</p>
        </div>
    )
}

ListItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        'poster-image': PropTypes.string,
    }),
}

export default ListItem