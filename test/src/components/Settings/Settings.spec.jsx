import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Settings from '../../../../src/components/Settings/Settings';

describe('Settings', () => {
  let actual;
  const spy = expect.createSpy();

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Settings
      onFormInput={spy}
      startingTime={{
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      }}
    />);
    actual = renderer.getRenderOutput();
  });

  it('renders a form', () => {
    expect(actual.type).toBe('form');
  });

  it('contains 3 input fields', () => {
    expect(React.Children.count(actual.props.children)).toBe(3);
  });

  it('handles form input', () => {
    expect(spy.call.length).toEqual(1);
  });
});
