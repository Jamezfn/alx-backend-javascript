import handleResponseFromAPI from './2-then';
import getResponseFromAPI from './0-promise.js';

describe('getResponseFromAPI', () => {
  it('should return a promise', () => {
    const result = getResponseFromAPI();
    expect(result).toBeInstanceOf(Promise);
  });

  it('should not resolve or reject within a specific time frame', async () => {
    const result = getResponseFromAPI();

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(result).toBeInstanceOf(Promise);
  });
});


describe('handleResponseFromAPI', () => {
  it('should return a success object when the promise resolves', async () => {
    const promise = Promise.resolve();
    const result = await handleResponseFromAPI(promise);

    expect(result).toEqual({ status: 200, body: 'success' });
  });

  it('should return an error when the promise rejects', async () => {
    const promise = Promise.reject();
    const result = await handleResponseFromAPI(promise);

    expect(result).toBeInstanceOf(Error);
  });

  it('should log a message after promise resolves or rejects', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    const promise = Promise.resolve();
    await handleResponseFromAPI(promise);

    expect(consoleSpy).toHaveBeenCalledWith('Got a response from the API');
    
    consoleSpy.mockRestore();
  });
});
