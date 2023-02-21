import { formatDate } from './date';

describe('formatDate', () => {
  it('should return correctly the date with MEDIUM_EN template', () => {
    // GIVEN
    const date = new Date('1989-11-25T16:41:00.000Z');
    // WHEN
    const formattedDate = formatDate({ date, format: 'MEDIUM_EN' });
    // THEN
    expect(formattedDate).toBe('Sat 25th Nov');
  });

  it('should return correctly the date with TIME template', () => {
    // GIVEN
    const date = new Date('1989-11-25T16:41:00.000Z');
    // WHEN
    const formattedDate = formatDate({ date, format: 'TIME' });
    // THEN
    expect(formattedDate).toBe('17:41');
  });
});
