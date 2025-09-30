import moment from 'moment';

export function formatDateToDateWithoutTime(date: Date): string {
       const dateWithoutTime= date.toISOString().split('T')[0];
       return moment(dateWithoutTime).format('DD/MM/YYYY');
}