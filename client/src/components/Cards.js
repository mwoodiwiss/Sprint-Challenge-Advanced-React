import React from 'react';
import { Card } from 'semantic-ui-react';
import './CardsDiv.scss';


export function ACard(props) {
    return (
        <Card className='card'>
            <h1>{props.name}</h1>
            <p>{'Country: '+props.country}</p>
            <p>{'Searches: '+props.searches}</p>
            <p>{'Id: '+props.id}</p>
        </Card>
    )
}