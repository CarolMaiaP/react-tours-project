import { useState } from "react"

interface TourProps{
  id: string,
  image: string, 
  info: string,
  price: string,
  name: string,
  deleteTour: (id: string) => void;
}

export function Tour({id, image, info, price, name, deleteTour}: TourProps){
  const [readMore, setReadMore] = useState(false)
  return(
    <div className="single-tour">
      <img src={image} alt={name}/>
      <div className="tour-info">
        <div className="principal-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0,200)}...`}
          <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? `show less` : `read more`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>not interested</button>
      </div>
    </div>
  )
}