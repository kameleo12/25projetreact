import { Component, useContext } from "react";
import LightDarkMode from "../themeswitch";
import TicTacToe from "../tictactoe";
import RandomColor from "../randomcolorgenerator";
import Accordian from "../accordian";
import StarRating from "../starrating";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading)
    return (
      <div>
        <h1>Loading data ! Please wait</h1>
      </div>
    );
  return (
    <div>
      <h1>Feature flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
