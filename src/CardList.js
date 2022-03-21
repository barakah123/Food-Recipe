import React from "react";
import Card from './Card';

const CardList= ({ recipe}) => {
    
    return (
        <div>
        {
            recipe.map((user, i) => {
                return (
                <Card 
                key={i} 
                id={recipe[i].id} 
                name={recipe[i].name} 
                email={recipe[i].email} 
                />
                );
            })
        }
        </div>

    );
}

export default CardList;