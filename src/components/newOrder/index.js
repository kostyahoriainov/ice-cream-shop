import React, {Component} from 'react';
import { connect } from 'react-redux';
import './newOrder.css';
import { placeOrder } from '../../AC'
import OrderForm from './OrderForm'
import OrderScoops from './OrderScoops';
import F from '../../flavors'

const DEFAULTSTATE = {
    customerName: '',
    scoops: {},
    cone: false
}

class NewOrder extends Component {

    state = {
        ...DEFAULTSTATE
    }

    handleName = ({target}) => this.setState(() => ({
        customerName: target.value
    }))

    handleCone = ({target}) => this.setState(() => ({
        cone: target.id === 'cone'
    }))

    handleIncreaseFlavor = (flavorName) => {
        this.setState(() => ({
            scoops: {
                ...this.state.scoops,
                [flavorName]: (this.state.scoops[flavorName] || 0) + 1
            }
        }))
    }

    handleDecreaseeFlavor = (flavorName) => {
        const { scoops } = this.state;
        if (!scoops[flavorName]) {
            return
        }  

        if (scoops[flavorName] === 1) {
            const updatedScoops = {
                ...scoops
            }
            delete updatedScoops[flavorName]

            this.setState(() => ({
                scoops: updatedScoops
            }))
        } else {
            this.setState(() => ({
                scoops: {
                    ...scoops,
                    [flavorName]: scoops[flavorName] - 1
                }
            }))
        }

        this.setState(() => ({
            scoops: {
                ...this.state.scoops,
                [flavorName]: (this.state.scoops[flavorName] || 0) + 1
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.placeOrder(this.state);
        this.setState(DEFAULTSTATE)
    }

	render(){
        const { customerName, scoops, cone} = this.state;
		return(
            <>
                <form className="form">
                    <OrderForm customerName={customerName}
                                cone={cone}
                                handleName={this.handleName} 
                                handleCone={this.handleCone}
                            />

                    <hr />
                    <div>
                        <label className="label-form label-form_scoops">
                            Scoops
                        </label>
                        <div className="scoops">

                            {
                                Object.keys(F).map(flavor => <OrderScoops key={flavor} 
                                                                        flavor={flavor}
                                                                        count={scoops[flavor] || 0}
                                                                        handleIncreaseFlavor={() => this.handleIncreaseFlavor(flavor)}
                                                                        handleDecreaseeFlavor={() => this.handleDecreaseeFlavor(flavor)}
                                                                        />)
                            }

                        </div>
                    </div>
                    <button className="order-button" onClick={this.handleSubmit}>Add</button>
                </form>
            </>
		);
	}
}

export default connect(
    ({order}) => ({order}),
    {placeOrder}
)(NewOrder);