import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import SettingsInputField from '../../../../../src/components/Settings/SettingsInputField/SettingsInputField';

describe('SettingsInputField', () => {
  let actual;

  beforeEach(() => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<SettingsInputField
      timerType="work"
      text="Work"
      startingTime={999}
      onFormInput={() => {}}
    />);
    actual = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(actual.type).toBe('div');
  });

  it('contains label and input field', () => {
    expect(actual.props.children[0].type).toBe('label');
    expect(actual.props.children[1].type).toBe('input');
  });

  it('handles input', () => {
    expect(actual.props.children[1].props.onChange).toExist();
  });

  it('validates user input', () => {
    expect(actual.props.children[1].props.type).toEqual('number');
    expect(actual.props.children[1].props.max).toEqual(90);
    expect(actual.props.children[1].props.min).toEqual(1);
    expect(actual.props.children[1].props.step).toEqual(1);
  });
});
