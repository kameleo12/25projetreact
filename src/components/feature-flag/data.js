const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToe: false,
  showRandomColorGenerator: false,
  showAccordian: false,
  showStarRating: false,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
}

export default featureFlagsDataServiceCall;
