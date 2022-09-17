// shallow render only renders the given component
// full DOM rendering renders child components
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
// import ReactShallowRenderer from "react-test-renderer/shallow";
// yarn add react-test-renderer@16.0.0
// allows us to render our components in regular js code

test("should render Header correctly", () => {
  // Now we have full access to the 3.1 Shallow Render API
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  //   expect(wrapper.find("h1").length).toBe(1);
  //   expect(wrapper.find("h1").text()).toBe("Expensify");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  /*
      {
        '$$typeof': Symbol(react.element),
        type: 'header',
        key: null,
        ref: null,
        props: { children: [ [Object], [Object], [Object], [Object] ] },
        _owner: null,
        _store: {}
      }

      */
  //   console.log(renderer.getRenderOutput());
});

// snapshots allow us to track changes to data overtime
// Enzyme is a renderer for react,
// much more full featured renderer react test
// full featured renderer
