
import Accordian from './components/accordian'
import RandomColor from './components/randomcolorgenerator'
import StarRating from './components/starrating'

function App() {


  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
