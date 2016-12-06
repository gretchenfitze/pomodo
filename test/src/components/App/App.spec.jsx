import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../../../../src/components/App/App';

describe('App', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    actual = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(actual.type).toBe('div');
  });
});
