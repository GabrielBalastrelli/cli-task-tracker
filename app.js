import mainMenu from './src/views/menu.view.js';

function start() {
  try {
    mainMenu();
  } catch (err) {
    console.log(`Houve um erro na execução da aplicação. 
                Código de erro: ${err?.code}
                Mensagem: ${err?.message}`);
  }
}

start();
