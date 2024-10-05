export default function getResponseFromAPI() {
  return new Promise(() => {});
}

import getResponseFromAPI from './0-promise.js';

describe('getResponseFromAPI', () => {
  it('should return a promise', () => {
    const result = getResponseFromAPI();
    expect(result).toBeInstanceOf(Promise);
  });

  it('should never resolve or reject', async () => {
    const result = getResponseFromAPI();
    await expect(result).resolves.toBeUndefined().catch((e) => {
      expect(e).toBeUndefined();
    });
    expect(result).toBeInstanceOf(Promise);
  });
});

