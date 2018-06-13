import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import App from "../App";

const add = (a: number, b: number) => a + b;

it("function and state test care", () => {
    // const HomeData = add(3, 4);

    const HeaderData = renderer.create(<App />).getInstance();
    // console.log(HeaderData);
    HeaderData.onEdit();

//   HomeData.change();
    expect(HeaderData.state.editing).toEqual(!HeaderData.state.editing);
});
