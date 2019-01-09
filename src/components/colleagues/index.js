import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import Colleague from './Colleague'
import './colleagues.css';
import { fetchEmployess } from '../../AC'


class Colleagues extends React.Component {

    componentDidMount () {
        this.props.fetchEmployess()
    }

    render() {
        const { data, loading, error} = this.props;
        return <div>
            {!loading && !error && <Fragment>
                {data.map(person => 
                    <Colleague name={person.name}
                                image={person.picture}
                                status='checked in'
                    />)}

            </Fragment>}
            {!loading && error && <div>Error</div>}
            {!error && loading && <div>Loading</div>}
        </div>

        
    }

};

export default connect(
    ({employees}) => ({
        data: employees.data,
        loading: employees.loading ,
        error: employees.error
    }),
    { fetchEmployess }
)(Colleagues);