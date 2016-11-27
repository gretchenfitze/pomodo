import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Settings from '../../../../src/components/Settings/Settings';

describe('Settings', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Settings
      onFormInput={() => {}}
      startingTime={999}
    />);
    actual = renderer.getRenderOutput();
  });

  it('renders a form', () => {
    expect(actual.type).toBe('form');
  });

  it('contains 3 input fields', () => {
    expect(actual.props.children.length).toEqual(3);
  });

  it('handles form input', () => {
    [].forEach.call(actual.props.children, (child) => {
      expect(child.props.onFormInput).toExist();
    });
  });
});
