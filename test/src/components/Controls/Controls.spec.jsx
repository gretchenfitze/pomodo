import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Controls from '../../../../src/components/Controls/Controls';

describe('Controls', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Controls onStartClick={() => {}} onSettingsClick={() => {}} />);
    actual = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(actual.type).toBe('div');
  });

  it('handles start click', () => {
    expect(actual.props.children[0].props.onClick).toExist();
  });

  it('handles settings click', () => {
    expect(actual.props.children[1].props.onClick).toExist();
  });
});
