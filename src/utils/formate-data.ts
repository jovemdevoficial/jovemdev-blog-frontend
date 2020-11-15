export const formatDate = (date: string): string => {
  const mounths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const dateObj = new Date(date);

  const dateFormated =
    dateObj.getDate().toString().padStart(2, '0') +
    ' de ' +
    mounths[dateObj.getMonth()] +
    ' de ' +
    dateObj.getFullYear();

  return dateFormated;
};
