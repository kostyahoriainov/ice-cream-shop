import React  from 'react';
import './freezer.css'

const  FreezerItem  = ({name, scoops, onClickRestock, onClickRemove}) => (
    <div className="ic">
        <p className="ic__title">{name}</p>
        <p className="ic__count">{scoops}</p>
        <button className="ic__restock" onClick={onClickRestock}>Restock</button>
        <button className="ic__restock" onClick={onClickRemove}>Remove</button>
    </div>
)

export default FreezerItem;