export default function formatDate(date) {
  return new Intl.DateTimeFormat('pt-br', {
    timeZone: 'America/Sao_Paulo',
    dateStyle: 'short',
  }).format(date);
}
