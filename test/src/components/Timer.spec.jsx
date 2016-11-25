import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Timer from '../../../src/components/Timer/Timer.jsx';

expect.extend(expectJSX);

describe('Timer', () => {
  function renderTimer(min = 0, sec = 0) {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Timer minutes={min} seconds={sec} />);
    return renderer.getRenderOutput();
  }

  it('renders a div', () => {
    expect(renderTimer().type).toBe('div');
  });

  it('not adds 0 if it is not necessary', () => {
    expect(renderTimer(12, 35)).toIncludeJSX('12:35');
    expect(renderTimer(16, 59)).toIncludeJSX('16:59');
  });

  it('adds 0 if it is necessary', () => {
    expect(renderTimer(0, 0)).toIncludeJSX('00:00');
    expect(renderTimer(4, 2)).toIncludeJSX('04:02');
  });
});
