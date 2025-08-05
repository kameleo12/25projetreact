import Accordian from "./components/accordian";
import RandomColor from "./components/randomcolorgenerator";
import StarRating from "./components/starrating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/loadmoredata";
import QRCodeGenerator from "./components/qrcode";
import LightDarkMode from "./components/themeswitch";
import Tabs from "./components/tabs/tabs";
import TabTest from "./components/tabs/tab-test";
import ModalTest from "./components/custommodelpopup/modal-test";
import GithubProfilFinder from "./components/githubprofilfinder";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />

      <LoadMoreData />
      <QRCodeGenerator />
      <LightDarkMode />
      <TabTest />
      <ModalTest />
      <GithubProfilFinder />
    </>
  );
}

export default App;
