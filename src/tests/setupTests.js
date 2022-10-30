import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
require("dotenv").config({ path: ".env.test" });
// import DotEnv from "dotenv";

// DotEnv.config({ path: ".env.test" });

// adds support for v16 of react
Enzyme.configure({
  adapter: new Adapter(),
});
