import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import F from '../../flavors';
import { addProductToFreezer } from '../../AC'

class AddProductToFreezer extends Component {

    state = {
        name: '',
        amount: 0
    }

    handleChange = ({target}) => {
        this.setState(() => ({
            [target.name]: target.value
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const amount = parseInt(this.state.amount, 10);
        
        if (!name) {
            alert('Choose flavor');
            return
        }

        if (isNaN(amount) && amount <= 0) {
            alert('Type amount of flavor');
            return
        }

        this.props.addProductToFreezer(name, amount);

        this.setState({
            flavor: '',
            amount: 0
})
    }

    render() {
        const options = Object.keys(F).map(flavor => <option key={flavor} value={flavor}> {flavor} </option>)
        const { name, amount} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="add-product-form">
                    <select name="name"
                            className="form-select"
                            value={name}
                            onChange={this.handleChange}
                    >
                        <option value="">Choose flavor</option>
                        {options}
                    </select>

                    <input type="numer"
                           className="form-number"
                           name="amount"
                           value={amount}
                           onChange={this.handleChange}
                    />

                    <button className="add-product-btn"> Add product</button>
                </div>
            </form>
        )
    }

}

AddProductToFreezer.propTypes = {
    addProductToFreezer: PropTypes.func.isRequired
}

export default connect(
    null,
    { addProductToFreezer }
)(AddProductToFreezer)
