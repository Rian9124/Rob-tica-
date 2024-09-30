document.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.querySelector('.intro-container');
    const mainContent = document.querySelector('nav');
    const truck = document.querySelector('.truck1'); // Ajustado para a classe correta
    const treesContainer = document.querySelector('.trees'); // Ajustado para a classe correta

    // Tamanho total da estrada
    const roadWidth = document.querySelector('.road').offsetWidth;

    // Função para criar uma árvore a cada 10% da estrada percorrida
    function createTree(position) {
        const tree = document.createElement('div');
        tree.classList.add('tree');
        tree.style.left = `${position}%`; // Posição da árvore
        treesContainer.appendChild(tree); // Adiciona ao contêiner de árvores
    }

    // Move o caminhão e cria as árvores
    let position = 0;
    const truckInterval = setInterval(() => {
        if (position >= 100) {
            clearInterval(truckInterval); // Para o caminhão ao final da estrada
            introContainer.style.display = 'none'; // Esconde a introdução
            mainContent.classList.remove('hidden'); // Mostra o conteúdo principal
        } else {
            position += 10; // Aumenta a posição do caminhão
            truck.style.left = `${(roadWidth * position) / 100}px`; // Move o caminhão
            createTree(position); // Cria uma árvore
        }
    }, 500); // Intervalo ajustado para refletir a nova duração das animações
});
let totalTreesPlanted = 0; // Inicializa o total de árvores plantadas
let totalXP = 0;           // Inicializa o total de XP como 0
let currentLevel = 1;      // Inicializa o nível atual

function moveTruck() {
    const inputValue = document.getElementById('tree-input').value;
    const truck = document.getElementById('truck');
    const message = document.getElementById('message');
    const totalTreesDisplay = document.getElementById('contador');
    const xpLevelDisplay = document.getElementById('xp-level');
    const levelMessageDisplay = document.getElementById('level-message');

    var NomeUser = document.getElementById('name-input').value; // Captura o nome do usuário
    var thankYouMessage = document.getElementById('thank-you-message');

    // Atualiza a mensagem com o nome do usuário, se fornecido
    thankYouMessage.innerText = NomeUser ? `Graças a você ${NomeUser}` : "Graças a você";

    let progressValue = parseInt(inputValue);

    // Verifique se o valor do input é um número e maior que zero
    if (!isNaN(progressValue) && progressValue > 0) {
        // Limitar o número de árvores a um máximo de 10
        if (progressValue > 10) {
            progressValue = 10;
        }

        // Atualiza o total de árvores plantadas
        totalTreesPlanted += progressValue;
        totalTreesDisplay.innerText = totalTreesPlanted; // Atualiza o contador na tela

        // Calcule a posição do caminhão
        let position = 0;
        if (totalTreesPlanted >= 40) {
            position = 350; // O caminhão chega ao final quando 40 ou mais árvores são plantadas
        } else {
            // Calcula a posição proporcional até 40 árvores
            position = (totalTreesPlanted / 40) * 350;
        }

        // Incrementa XP a cada 10 árvores
        if (totalTreesPlanted >= 10) {
            totalXP = Math.floor(totalTreesPlanted / 10); // XP baseado no total de árvores plantadas
            currentLevel = totalXP; // Atualiza o nível baseado no total de XP

            // Atualiza o texto do nível
            xpLevelDisplay.innerText = `Nível de XP: ${currentLevel}`;
            // Atualiza a mensagem do nível
            updateLevelMessage(levelMessageDisplay);
        }

        truck.style.left = `${position}px`;

        // Exibe a mensagem de sucesso por 2 segundos
        message.classList.add('show');
        setTimeout(() => {
            message.classList.remove('show');
        }, 2000);
    } else {
        alert('Por favor, insira um número válido maior que 0.');
    }

    // Limpa o campo de entrada após o processamento
    document.getElementById('tree-input').value = '';
}




function updateLevelMessage(levelMessageDisplay) {
    let message;

    switch (currentLevel) {
        case 1:
            message = "A conscientização sobre o meio ambiente está crescendo.";
            break;
        case 2:
            message = "Inovações sustentáveis estão se tornando comuns.";
            break;
        case 3:
            message = "As comunidades estão se unindo em prol da sustentabilidade.";
            break;
        default:
            message = "Você alcançou o máximo nível de consciência sustentável!";
            break;
    }

    levelMessageDisplay.innerText = message;
}







// Inicio do Feedback

const carousel = document.querySelector('.feedback-carousel');
let scrollAmount = 0;

function scrollCarousel() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollAmount += 1;
    if (scrollAmount >= maxScroll) {
        scrollAmount = 0; 
    }
    carousel.scrollLeft = scrollAmount;
}
setInterval(scrollCarousel, 20);


function showFeedbackForm() {
    // Mostra o modal
    document.getElementById('feedback-modal').classList.add('show');
}

function hideFeedbackForm() {
    // Esconde o modal
    document.getElementById('feedback-modal').classList.remove('show');
}
