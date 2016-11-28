import expect from 'expect';
import notify from '../../../src/utilities/notify';

describe('Notifications', () => {
  it('throws an error if permission denied', () => {
    expect(notify).toThrow(/Notifications permission denied/);
  });
});
