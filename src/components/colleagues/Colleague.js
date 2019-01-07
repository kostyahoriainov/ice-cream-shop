import React, {Component} from 'react';

class Colleague extends Component {

	render(){
	    const {image, name, status} = this.props
		return(
            <div className="colleagues">
                <div className="colleague__photo">
                    <img src={`/i/${image}`} alt={name} />
                </div>
                <div>
                    <p className="colleague-person-name">{name}</p>
                    <p className="colleague-person-status">{status}</p>
                </div>
            </div>
		);
	}
}

export default Colleague;