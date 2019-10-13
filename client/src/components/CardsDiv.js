import React from 'react';
import { ACard } from './Cards';
import './Cards.scss';

const CardsDiv = (props) => {
    return (
        <div className='cards'>
            {props.data.map((item, index) => {
                return (
                <ACard   key={index} name={item.name} country={item.country} 
                        searches={item.searches} id={item.id}/>
                )
            })}
        </div>    
    )
}
export default CardsDiv;