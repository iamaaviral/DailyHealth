// components/__tests__/Hello.tsx
import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import App from "../App";

test("App snapshot", () => {
  const snap = renderer.create(
    <App />,
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
