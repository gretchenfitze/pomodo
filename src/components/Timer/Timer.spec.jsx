import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Timer from './Timer.jsx';

expect.extend(expectJSX);

describe('Timer', () => {
  it('should render the timer', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Timer minutes={4} seconds={20} />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    const expected = (
      <div className={undefined}>
        04:20
      </div>
    );
    expect(result).toEqualJSX(expected);
  });
});
