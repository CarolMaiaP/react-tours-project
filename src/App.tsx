import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading';
import { Tour } from './components/Tour';
import { Tours } from './components/Tours'

const api = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  async function fetchTours(){
    setLoading(true)

    try{
      const response = await fetch(api);
      const tours = await response.json();
      console.log(tours)
      setLoading(false)
      setTours(tours);
    }catch{
      setLoading(false)
      console.log(Error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  return (
    <div className="Tours">
      <Tours tours={tours}/>
    </div>
  )
}

export default App
