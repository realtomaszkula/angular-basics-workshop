import { PersonNamePipe } from './person-name.pipe';

describe('PersonNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonNamePipe();
    expect(pipe).toBeTruthy();
  });
});
