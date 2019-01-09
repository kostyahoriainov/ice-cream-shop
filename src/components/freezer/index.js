import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTemperature, addProductToFreezer, removeScoop } from '../../AC';
import Box from '../layout/Box';
import FreezerItem from './FreezerItem'
import AddProductToFreezer from './AddProductToFreezer';


class  Freezer  extends Component {

    componentDidMount() {
        const randomTemperature = Math.round(Math.random() * 10);

        this.props.updateTemperature(randomTemperature);
    }

    handleRestock = (name) => {
        const amount = parseInt(window.prompt('Enter amount of restock'), 10);

        if(!isNaN(amount)) {
            this.props.addProductToFreezer(name, amount);
        }
    } 

    handleRemove = (name) => {
        this.props.removeScoop(name);
    }
    
    render(){
        const { flavors, temperature } = this.props;
        const items = Object.keys(flavors).map(name => 
            <FreezerItem key={name} 
                        name={name} 
                        scoops={flavors[name]}
                        onClickRestock={() => this.handleRestock(name)}
                        onClickRemove={() => this.handleRemove(name)}
                        />
            )
    	return (
    		<Box title={`Freezer (-${temperature || 0} C)`}>
        <div className="box__content">
            {items}
        </div>
            <AddProductToFreezer />
        </Box>
    )
    }
}

Freezer.propTypes = {
    temperature: PropTypes.number,
    flavors: PropTypes.object,
    updateTemperature: PropTypes.func.isRequired,
    addProductToFreezer: PropTypes.func.isRequired,
    removeScoop: PropTypes.func.isRequired
}

Freezer.defaultProps = {
    temperature: 0,
    flavors: {}
}

export default connect(
    ({freezer}) => ({
        flavors: freezer.flavors,
        temperature: freezer.temperature
    }),
    { updateTemperature, addProductToFreezer, removeScoop }
)(Freezer);
