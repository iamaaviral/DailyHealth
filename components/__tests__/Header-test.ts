// components/__tests__/Hello.tsx
import React from 'react'
import renderer from 'react-test-renderer'
import 'react-native'

import Header from '../Header';

test("'Header snapshot", () => {
  const snap = renderer.create(
    <Header />
  ).toJSON()

  expect(snap).toMatchSnapshot()
})
