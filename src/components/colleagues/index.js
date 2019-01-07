import React, {Fragment} from 'react';
import Colleague from './Colleague'
import './colleagues.css'


const  Colleagues  = () => <Fragment>
    <Colleague name="Pete" image="person1.png" status="checked in" />
    <Colleague name="Ashley" image="person5.png" status="checked in" />
    <Colleague name="Bill" image="person2.png" status="checked in" />

</Fragment>

export default Colleagues;