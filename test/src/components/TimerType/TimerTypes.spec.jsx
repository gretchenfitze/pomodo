import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TimerTypes from '../../../../src/components/TimerTypes/TimerTypes';

describe('TimerTypes', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TimerTypes />);
    actual = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(actual.type).toBe('div');
  });

  it('contains 3 timer type links', () => {
    expect(actual.props.children.length).toEqual(3);
  });
});
