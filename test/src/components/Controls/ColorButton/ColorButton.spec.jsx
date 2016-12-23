import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import ColorButton from '../../../../../src/components/Controls/ColorButton/ColorButton';

expect.extend(expectJSX);

describe('ColorButton', () => {
  let actual;
  const spy = expect.createSpy();

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<ColorButton onClick={spy} />);
    actual = renderer.getRenderOutput();
  });

  it('renders a button', () => {
    expect(actual.type).toBe('button');
  });

  it('handles click', () => {
    expect(spy.call.length).toEqual(1);
  });
});
