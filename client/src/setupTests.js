import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};
