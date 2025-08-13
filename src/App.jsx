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
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tictactoe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseOnClickOutsideTest from "./components/use-outside-click/test";

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
      <SearchAutocomplete />
      <TicTacToe />
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      <UseOnClickOutsideTest />
    </>
  );
}

export default App;
