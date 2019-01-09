import React from 'react';
import PropTypes from 'prop-types';

const Scoop = ({title, count}) => 
    <div className="order-item">
    <div className="order-flavor__item">
        <span className="order-item__title">{title}</span>
        <span className="order-item__count">{count}</span>
    </div>
    </div>


Scoop.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

export default Scoop