// components/__tests__/Hello.tsx
import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import Header from "../components/Header";

test("Header snapshot", () => {
  const snap = renderer.create(
    <Header />,
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
