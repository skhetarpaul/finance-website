import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from '../images2/bcg2.jpg'
import PropTypes from 'prop-types';

export default function Room({room}) {
    console.log(room);
    const {name, slug, images, price} = room;

    return (
        <article className = "room">
            <div className = "img-container">
                <img src = {  images[0] || defaultImage} alt= "single room" />
                <div className = "price-top">
                    <h6>${price}</h6>
                    <p>per year</p>
                </div>
                <Link to= {`/services/${slug}`} className = "btn-primary room-link" >
                    features
                </Link>
            </div>
            <p className = "room-info">{name}</p>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}