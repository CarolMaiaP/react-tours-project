import { useState } from "react";
import { Tour } from "./Tour"

interface ToursProps{
  tours: Array<object>;
  deleteTour: Array<object>;
}

export function Tours({tours, deleteTour}: ToursProps){
  return(
    <section>
      <div className="title">
        <h2>Tours</h2>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id}{...tour} deleteTour={deleteTour}></Tour>
        })}
      </div>
    </section>
  )
}