import React, {useState} from "react";
import Card from "./Card"

function Tours({tours,removeTour}){
    return(
        <div className="flex flex-row gap-16 flex-wrap justify-center">
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>

    )
}

export default Tours;
