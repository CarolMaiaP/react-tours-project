interface TourProps{
  id: string,
  image: string, 
  info: string,
  price: string,
  name: string
}

export function Tour({id, image, info, price, name}: TourProps){
  return(
    <div className="single-tour">
      <img src={image} alt={name}/>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </div>
    </div>
  )
}