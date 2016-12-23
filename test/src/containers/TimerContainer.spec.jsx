import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { TimerContainer, mapStateToProps } from '../../../src/containers/TimerContainer';

expect.extend(expectJSX);

describe('TimerContainer', () => {
  let container;
  let actual;
  const spyStart = expect.createSpy();
  const spyInput = expect.createSpy();
  const spySettings = expect.createSpy();
  const spyColor = expect.createSpy();
  const spyReset = expect.createSpy();

  const props = {
    seconds: 999,
    timerType: 'work',
    startingTime: {
      work: 1500,
      shortBreak: 300,
      longBreak: 900,
    },
    onStartPauseClick: spyStart,
    onFormInput: spyInput,
    onSettingsClick: spySettings,
    onColorClick: spyColor,
    onTimerReset: spyReset,
  };

  beforeEach(() => {
    container = ReactTestUtils.renderIntoDocument(<TimerContainer {...props} />);
    actual = ReactTestUtils.scryRenderedDOMComponentsWithTag(container, 'div')[0];
  });

  it('renders a div', () => {
    expect(actual.tagName).toBe('DIV');
  });

  it('handles start click', () => {
    expect(spyStart.call.length).toEqual(1);
  });

  it('handles settings click', () => {
    expect(spySettings.call.length).toEqual(1);
  });

  it('handles color change click', () => {
    expect(spyColor.call.length).toEqual(1);
  });

  it('handles reset', () => {
    expect(spyReset.call.length).toEqual(1);
  });

  it('handles input', () => {
    expect(spyInput.call.length).toEqual(1);
  });

  it('resets timer if time\'s up', () => {
    container.componentDidUpdate({
      ...props,
      seconds: 0,
    });
    expect(spyReset.call.length).toEqual(1);
  });

  it('resets timer if timer type switches', () => {
    container.componentWillReceiveProps({
      ...props,
      timerType: 'shortBreak',
    });
    expect(spyReset.call.length).toEqual(1);
  });

  it('changes color theme', () => {
    container.componentDidUpdate({
      ...props,
      colorTheme: true,
    });
    expect(spyColor.call.length).toEqual(1);
  });

  it('maps state to props', () => {
    expect(mapStateToProps({ timer: {
      seconds: 999,
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
    } }, { params: { timerType: 'work' } })).toEqual({
      seconds: 999,
      active: undefined,
      settingsVisibility: undefined,
      colorTheme: undefined,
      timerType: 'work',
      startingTime: {
        work: 1500,
        shortBreak: 300,
        longBreak: 900,
      },
    });
  });
});
