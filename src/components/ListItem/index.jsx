import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
    return (
        <div>
            <div className="bg-indigo-300 mb-1">
                <img className="object-cover h-48 w-96 " />
            </div>
            <p class="text-lg">Caption</p>
        </div>
    )
}

ListItem.propTypes = {}

export default ListItem