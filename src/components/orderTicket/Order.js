import React, {Component} from 'react';

const STATUSES = [
    'pending',
    'fulfilled',
    'paid',
];

class Order extends Component {

	render(){
        const { order } = this.props;
		return(
            <div className="order">
                <div className="order-status">
                    <p className="order-status__title">{order.customerName}</p>
                    <select className="order-status__select">
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                <p className="order-count">{order.cone ? 'Cone' : 'Cup'}</p>


                <div className="order-item">
                    <div className="order-flavor__item">
                        <span className="order-item__title">Vanilla</span>
                        <span className="order-item__count">3</span>
                    </div>
                    <div className="order-flavor__item">
                        <span className="order-item__title">Chocolatte</span>
                        <span className="order-item__count">3</span>
                    </div>
                </div>
              </div>
		);
	}
}

export default Order;