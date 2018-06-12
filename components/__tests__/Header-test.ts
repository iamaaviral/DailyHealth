// components/__tests__/Hello.tsx
import React from 'react'
import renderer from 'react-test-renderer'
import 'react-native'

import { Header } from "../Header"

it("renders correctly with defaults", () => {
  const snap = renderer.create(
    <Header />
  ).toJSON()

  expect(snap).toMatchSnapshot()
})

// test('Header snapshot' ,() =>{
//   const snap = renderer.create(
//     <Header />
//   ).toJSON();

//   expect(snap).toMatchSnapshot
// })