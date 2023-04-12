import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const ListItem = props => {
    return (
        <div>
            <div className="bg-indigo-300 mb-1">
                <Image
                    src={'/assets/images/poster1.jpg'}
                />
            </div>
            <p class="text-lg">Caption</p>
        </div>
    )
}

ListItem.propTypes = {}

export default ListItem