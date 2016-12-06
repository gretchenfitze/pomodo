import expect from 'expect';
import { loadState, saveState } from '../../src/localStorage';

describe('localStorage', () => {
  const testState = {
    startingTime: {
      work: 1500,
      shortBreak: 300,
      longBreak: 900,
    },
    seconds: 100,
  };

  it('returns undefined if there is no state in localStorage', () => {
    expect(loadState()).toBe(undefined);
  });

  it('saves and reads state from localStorage', () => {
    saveState(testState);
    expect(loadState()).toEqual(testState);
  });

  it('returns undefined if saves empty state', () => {
    expect(saveState()).toBe(undefined);
    expect(loadState()).toBe(undefined);
  });
});
