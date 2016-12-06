import expect from 'expect';
import notify from '../../../src/utilities/notify';

describe('Notifications', () => {
  it('returns false if permission denied', () => {
    expect(notify()).toBe(false);
  });
});
