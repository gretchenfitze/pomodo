import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import StartButton from '../../../../../src/components/Controls/StartButton/StartButton';

describe('StartButton', () => {
  const spy = expect.createSpy();

  function renderStartButton(active = null) {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<StartButton onClick={spy} active={active} />);
    return renderer.getRenderOutput();
  }

  it('renders a button', () => {
    expect(renderStartButton().type).toBe('button');
  });

  it('handles click', () => {
    expect(spy.call.length).toEqual(1);
  });

  it('changes text to "Start" if not active', () => {
    expect(renderStartButton().props.children).toEqual('Start');
    expect(renderStartButton(null).props.children).toEqual('Start');
    expect(renderStartButton(0).props.children).toEqual('Start');
  });

  it('changes text to "Pause" if active', () => {
    expect(renderStartButton(42).props.children).toEqual('Pause');
    expect(renderStartButton(11).props.children).toEqual('Pause');
    expect(renderStartButton(69).props.children).toEqual('Pause');
  });
});
