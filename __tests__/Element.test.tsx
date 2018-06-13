import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import Header from "../components/Header";

const findElement = (tree: any, element: any) => {
    console.log(tree.children);
    for(node in tree.children){
        tree.children[node].props.
    }
    return true;
};

it("find element", () => {
    const tree = renderer.create(<Header />).toJSON();
//   HomeData.change();
    expect(findElement(tree, "edit")).toBeDefined();
});
