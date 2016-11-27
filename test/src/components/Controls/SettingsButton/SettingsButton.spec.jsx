import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import SettingsButton from '../../../../../src/components/Controls/SettingsButton/SettingsButton';
import SettingsIcon from '../../../../../src/components/Controls/SettingsButton/SettingsButton.svg';

expect.extend(expectJSX);

describe('SettingsButton', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<SettingsButton onClick={() => {}} />);
    actual = renderer.getRenderOutput();
  });

  it('renders a button', () => {
    expect(actual.type).toBe('button');
  });

  it('handles click', () => {
    expect(actual.props.onClick).toExist();
  });

  it('contains settings icon', () => {
    let icon = ReactTestUtils.createRenderer();
    icon.render(<SettingsIcon height="8vh" width="8vh" />);
    icon = icon.getRenderOutput();
    expect(actual.props.children).toEqualJSX(<SettingsIcon height="8vh" width="8vh" />);
  });

  describe('SettingsIcon', () => {
    it('renders settings icon', () => {
      const iconRenderer = ReactTestUtils.createRenderer();
      iconRenderer.render(<SettingsIcon />);
      const actualIcon = iconRenderer.getRenderOutput();
      expect(actualIcon.type).toBe('svg');
    });
  });
});
