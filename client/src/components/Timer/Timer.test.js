import React from "react";
import { shallow, mount } from "enzyme";
import Timer from "./Timer";

describe("<Timer />", () => {
  jest.useFakeTimers();
  test("Render without crashing", () => {
    const el = shallow(<Timer timeLimit={2} />);
    expect(el).toExist();
  });

  test("setInterval Called", () => {
    jest.useFakeTimers();
    shallow(<Timer timeLimit={2} />);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test("Timer reaches 0", () => {
    const el = mount(<Timer timeLimit={2} />);
    it("Start with 2", () => {
      expect(el.find(".Timer").text()).toBe("2");
    });
    it("Reaches 1", () => {
      jest.runTimersToTime(1000);
      el.update();
      expect(el.find(".Timer").text()).toBe("1");
    });
    it("Reaches 0", () => {
      jest.runTimersToTime(1000);
      el.update();
      expect(el.find(".Timer").text()).toBe("0");
    });
  });

  test("OnFinish callback called", () => {
    const callback = jest.fn();
    shallow(<Timer timeLimit={2} onFinish={callback} />);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("Stop timer", () => {
    const callback = jest.fn();
    const el = shallow(<Timer timeLimit={2} onFinish={callback} />);
    expect(callback).not.toBeCalled();
    el.setProps({ run: false });
    jest.runAllTimers();
    expect(callback).not.toBeCalled();
  });

  test("Create halted Timer", () => {
    const callback = jest.fn();
    const el = shallow(<Timer run={false} timeLimit={2} onFinish={callback} />);
    expect(el.find(".Timer").text()).toBe("2");
    jest.runAllTimers();
    expect(el.find(".Timer").text()).toBe("2");
  });

  test("Restart Timer with new values after stopping", () => {
    const callback = jest.fn();
    const el = shallow(<Timer run={true} timeLimit={2} onFinish={callback} />);
    expect(el.find(".Timer").text()).toBe("2");

    el.setProps({ run: false });
    jest.runTimersToTime(1000);
    el.update();
    expect(el.find(".Timer").text()).toBe("2");

    const newCallback = jest.fn();
    el.setProps({ run: true, onFinish: newCallback, timeLimit: 10 });
    jest.runTimersToTime(1000);
    el.update();
    expect(el.find(".Timer").text()).toBe("9");
  });

  test("Restart Timer with new values after finishing", () => {
    const el = shallow(<Timer />);
    expect(el.find(".Timer").text()).toBe("20");

    jest.runTimersToTime(20000);
    el.update();
    expect(el.find(".Timer").text()).toBe("0");

    el.setProps({ run: false });

    const newCallback = jest.fn();
    el.setProps({ run: true, onFinish: newCallback, timeLimit: 10 });
    jest.runTimersToTime(1000);
    el.update();
    expect(el.find(".Timer").text()).toBe("9");
  });

  test("Do not restart Timer with same values when already running", () => {
    const callback = jest.fn();
    const el = shallow(<Timer run={true} timeLimit={5} onFinish={callback} />);
    expect(el.find(".Timer").text()).toBe("5");

    jest.runTimersToTime(2000);
    el.update();

    el.setProps({ run: true, onFinish: callback, timeLimit: 5 });
    el.update();
    expect(el.find(".Timer").text()).toBe("3");
  });

  test("Do not restart Timer with different timeLimit when already running", () => {
    const callback = jest.fn();
    const el = shallow(<Timer run={true} timeLimit={5} onFinish={callback} />);
    expect(el.find(".Timer").text()).toBe("5");

    jest.runTimersToTime(1000);
    el.update();

    el.setProps({ timeLimit: 2 });
    el.update();
    expect(el.find(".Timer").text()).toBe("4");
  });

  test("Remove Timer on unmount", () => {
    const callback = jest.fn();
    const el = shallow(<Timer run={true} timeLimit={2} onFinish={callback} />);
    expect(el).toExist();

    el.unmount();
    jest.runAllTimers();
    expect(callback).not.toHaveBeenCalled();
  });
});
