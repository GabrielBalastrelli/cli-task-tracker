export function convertStatus(status) {
  switch (status) {
    case 'todo':
      return 'Pendente';
    case 'in progress':
      return 'Em Progresso';
    case 'done':
      return 'Concluída';
    default:
      return 'Status não identificado';
  }
}
