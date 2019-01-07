import React from 'react';
import PropTypes from 'prop-types';

const OrderScoops = ({ flavor, count, handleIncreaseFlavor, handleDecreaseeFlavor}) =>

    <div className="scoop">
        <div className="scoop__title">{flavor}</div>
        <div className="scoop-buttons">
            <span className="scoop-buttons__item" onClick={handleIncreaseFlavor}>+</span>
            <span className="scoop-buttons__count">{count}</span>
            <span className="scoop-buttons__item" onClick={handleDecreaseeFlavor}>-</span>
        </div>
    </div>

OrderScoops.propTypes = {
    flavor: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    handleIncreaseFlavor: PropTypes.func.isRequired,
    handleDecreaseeFlavor: PropTypes.func.isRequired

}

export default OrderScoops;