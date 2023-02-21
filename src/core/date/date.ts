import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(advancedFormat);
dayjs.extend(utc);

enum DateFormat {
  /** ex: 16:41 or 4:41 PM */
  TIME = 'HH:mm',
  /** ex: Nov 25th, 1989 */
  MEDIUM_EN = 'ddd Do MMM'
}

export const formatDate = ({
  date,
  format
}: {
  date: string | number | dayjs.Dayjs | Date | null | undefined;
  format: keyof typeof DateFormat;
}) => {
  const template = DateFormat[format];

  return dayjs(date).format(template);
};
