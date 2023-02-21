import { formatDate } from './date';

describe('Date helper', () => {
  it('should format date correctly with MEDIUM_EN template', () => {
    // GIVEN
    const date = new Date('1989-11-25T16:41:00.000Z');
    // WHEN
    const formattedDate = formatDate({ date, format: 'MEDIUM_EN' });
    // THEN
    expect(formattedDate).toBe('Sat 25th Nov');
  });
});
