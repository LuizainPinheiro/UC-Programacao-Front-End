let balao = document.getElementById('balao');
let tamanho = 30;

function trocarTamanho(event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        tamanho = tamanho * 1.1;
        
        if (tamanho > 200) {
          balao.textContent = '💥';
          window.removeEventListener('keydown', trocarTamanho);
        } else {
          balao.style.fontSize = tamanho + 'px'; 
        }
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault(); 
        
        tamanho = tamanho * 0.9; 
        balao.style.fontSize = tamanho + 'px'; 
      }

    }
    window.addEventListener('keydown', trocarTamanho);

