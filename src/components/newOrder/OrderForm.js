import React from 'react';
import PropTypes from 'prop-types';

const OrderForm = ({customerName, cone, handleName, handleCone}) => 

    <div className="row">
        <div className="col">
            <label className="label-form">Customer name</label>
            <input type="text" 
                    className="form-control"
                    name="customerName" 
                    value={customerName}
                    placeholder="Customer name"
                    onChange={handleName}    
                />
        </div>
        <div className="col">
            <label className="label-form">Container</label>
            <div>
                <div className="form-check">
                    <input className="form-check-input" 
                            type="radio" 
                            name="inlineRadioOptions" 
                            checked={cone}
                            onChange={handleCone}
                            id="cone"
                            />
                    <label className="form-check-label" htmlFor="cone">Cone</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" 
                            type="radio" 
                            name="inlineRadioOptions" 
                            checked={!cone}
                            onChange={handleCone}
                            id="cup"
                            />
                    <label className="form-check-label" htmlFor="cup">Cup</label>
                </div>
            </div>
        </div>
    </div>

OrderForm.propTypes = {
    customerName: PropTypes.string.isRequired,
    cone: PropTypes.bool.isRequired,
    handleCone: PropTypes.func.isRequired,
    handleName: PropTypes.func.isRequired
}

export default OrderForm;