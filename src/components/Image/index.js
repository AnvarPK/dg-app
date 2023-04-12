import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import PlaceholderImage from './placeholder_for_missing_posters.png';

const Image = (props) => {
    const { src, alt } = props;
    const [loaded, setLoaded] = useState(false);
    const classes = 'object-cover h-48 w-96';

    const handleImageLoad = () => {
        setLoaded(true);
    }

    const handleImageError = () => {
        setLoaded(false);
    }

    return (
        <>
            {!loaded && <img src={PlaceholderImage} alt={alt} className={classes} />}
            <img
                src={src}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={classes}
                style={{ display: loaded ? 'block' : 'none' }}
            />
        </>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    classes: PropTypes.string,
};

Image.defaultProps = {
    alt: 'Placeholder',
};

export default Image;