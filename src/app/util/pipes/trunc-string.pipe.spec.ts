import { TruncStringPipe } from './trunc-string.pipe';

describe('TruncStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncStringPipe();
    expect(pipe).toBeTruthy();
  });
});
