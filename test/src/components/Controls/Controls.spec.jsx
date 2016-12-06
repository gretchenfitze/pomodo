import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Controls from '../../../../src/components/Controls/Controls';

describe('Controls', () => {
  let actual;
  const spyClick = expect.createSpy();
  const spySettings = expect.createSpy();

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Controls onStartClick={spyClick} onSettingsClick={spySettings} />);
    actual = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(actual.type).toBe('div');
  });

  it('handles start click', () => {
    expect(spyClick.call.length).toEqual(1);
  });

  it('handles settings click', () => {
    expect(spySettings.call.length).toEqual(1);
  });
});
