import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import esES from 'date-fns/locale/en-US';

const locales = {
  
  'es': esES,
}

export const helpersCalendarLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});