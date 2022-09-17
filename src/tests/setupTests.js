import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// adds support for v16 of react
Enzyme.configure({
  adapter: new Adapter(),
});
