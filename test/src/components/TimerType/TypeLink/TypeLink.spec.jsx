import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TypeLink from '../../../../../src/components/TimerTypes/TypeLink/TypeLink';

expect.extend(expectJSX);

describe('TimerTypes', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypeLink timerType="work">Work</TypeLink>);
    actual = renderer.getRenderOutput();
  });

  it('renders a link', () => {
    expect(actual).toExist();
  });

  it('redirects to timerType', () => {
    expect(actual.props.to).toEqual('work');
  });
});
