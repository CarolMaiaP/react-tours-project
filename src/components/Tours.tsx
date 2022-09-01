import { Tour } from "./Tour"

interface ToursProps{
  tours: Array<object>;
}

export function Tours({tours}: ToursProps){
  return(
    <section>
      <div className="title">
        <h2>Tours</h2>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id}{...tour}></Tour>
        })}
      </div>
    </section>
  )
}