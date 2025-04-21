export const periodCounter = (jobIndex: number, startDate: string, endDate = ''): string => {
  const startMonth = Number(startDate.split('.')[1]);
  const startYear = Number(startDate.split('.')[2]);

  const endMonth =
    endDate.length
      ? Number(endDate.split('.')[1])
      : Number(new Date().toISOString().split('-')[1]);
  
  const endYear =
    endDate.length
      ? Number(endDate.split('.')[2])
      : Number(new Date().toISOString().split('-')[0]);
  
  const fullYears: number =
    (endYear - startYear) > 0
      ? endYear - startYear
      : 0;
  
  const periodInMonths =
    fullYears > 0
      ? ((fullYears - 1) * 12) + (12 - startMonth) + endMonth
      : endMonth - startMonth;

  if (periodInMonths === 12) {
    return `(1 Year)`;
  }

  if (periodInMonths < 12) {
    return `(${periodInMonths} months)`;
  }

  const yearsAmount = Math.floor(periodInMonths / 12);
  const yearsAmountMessage = yearsAmount > 1 ? 'years' : 'year';
  const monthsAmount = periodInMonths % 12;
  const monthsAmountMessage = monthsAmount > 1 ? 'months' : 'month';

  if (jobIndex !== 0) {
    return `(${yearsAmount} ${yearsAmountMessage})`;
  }

  return periodInMonths % 12 === 0
    ? `(${yearsAmount} ${yearsAmountMessage})`
    : `(${yearsAmount} ${yearsAmountMessage} ${monthsAmount} ${monthsAmountMessage})`;
}

export const dateCutter = (index: number, date: string): string => {
  return index === 0
    ? date
    : `${date.split('.')[2]}`;
}