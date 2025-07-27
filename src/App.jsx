
import Accordian from './components/accordian'
import RandomColor from './components/randomcolorgenerator'
import StarRating from './components/starrating'
import ImageSlider from './components/image-slider'

function App() {


  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />
    </>
  )
}

export default App
