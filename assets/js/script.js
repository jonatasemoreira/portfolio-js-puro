// BOTÃO DE VOLTAR AO TOPO
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-top").style.display = "block";
    document.getElementById("back-top").removeAttribute("disabled");
  } else {
    document.getElementById("back-top").style.display = "none";
    document.getElementById("back-top").setAttribute("disabled", "disabled");
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MENU HAMBURGUER
const botaoMobile = document.getElementById('menu-hamburguer');
const header = document.getElementById('header');
const itensNav = document.querySelectorAll('.nav-item');
const iconMobile = document.getElementById('icon-mobile');

botaoMobile.addEventListener('click', () => {
  // Exibir navbar
  if (header.style.display === 'none') {
    header.style.display = 'block';
    header.classList.add('show-mobile');

    // Mudar o ícone de fa-bars para fa-times
    iconMobile.classList.replace('fa-bars', 'fa-times');
  } else {
    header.style.display = 'none';
    header.classList.remove('show-mobile');

    // Mudar o ícone de fa-times para fa-bars
    iconMobile.classList.replace('fa-times', 'fa-bars');
  }
});

itensNav.forEach(item => {
  item.addEventListener('click', () => {
    header.style.display = 'none';
    header.classList.remove('show-mobile');
    botaoMobile.classList.replace('fa-times', 'fa-bars');
    iconMobile.classList.replace('fa-times', 'fa-bars');
  });
});

// SCROLL REVEAL
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

//SKILLS
const arraySkills = [
  {
    nome: "JavaScript",
    porcentagem: "80",
  },
  {
    nome: "PHP",
    porcentagem: "50",
  },
  {
    nome: "HTML",
    porcentagem: "30",
  },
  {
    nome: "CSS",
    porcentagem: "95",
  },
  {
    nome: "Bootstrap",
    porcentagem: "50",
  },
  {
    nome: "React",
    porcentagem: "70",
  },
  {
    nome: "Laravel",
    porcentagem: "50",
  }
];

const navSkills = document.getElementById('skill-nav');
const progressBarDelay = 500; // Atraso (em milissegundos) entre a animação de cada barra de progresso

const postSkills = () => {
  arraySkills.forEach((skill) => {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = `
      <div class="skill-container">
        <p>${skill.nome}</p>
        <div class="skill-progress">
          <div class="progress-fill"></div>
        </div>
      </div>
    `;
    navSkills.appendChild(skillItem);

    const progressFill = skillItem.querySelector('.progress-fill');
    const width = skill.porcentagem;
    setTimeout(() => {
      progressFill.style.width = `${width}%`;
    }, progressBarDelay);
  });
};
postSkills();


// PROJETOS
const arrayProjects = [
  {
    nome: 'Filmes React.js',
    image: 'assets/img/filmesReact.png',
    link: 'https://jonatasemoreira.github.io/movies/'
  },
  {
    nome: 'E-Commerce',
    image: 'assets/img/shoppingReact.png',
    link: 'https://jonatasemoreira.github.io/shopping/'
  },
  {
    nome: 'Portfólio React',
    image: 'assets/img/portfolio-react.png',
    link: 'https://jonatasemoreira.github.io/portf-lio-react/'
  },
  {
    nome: 'Projeto 4',
    image: 'https://placehold.co/200x150',
    link: 'https://jonatasemoreira/github.com'
  },

];
const navProjects = document.getElementById('navProjects');
const postProjects = () => {
  arrayProjects.forEach((project) => {
    const containerProject = document.createElement('div');
    const nomeProject = document.createElement('p');
    const imgProject = document.createElement('img');
    const linkProject = document.createElement('a');

    //adicionando classes
    containerProject.classList.add('unidade-skill');

    nomeProject.textContent = project.nome;
    imgProject.src = project.image;
    linkProject.textContent = "Acessar";
    linkProject.href = project.link;

    containerProject.appendChild(nomeProject);
    containerProject.appendChild(imgProject);
    containerProject.appendChild(linkProject);
    

    navProjects.appendChild(containerProject);
  });
};

postProjects();

//CONTATO
const form = document.querySelector('form');
const submitButton = document.getElementById('btn-enviar-contato');

function limparCampos() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

function enviarMensagem(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    return; // Se algum campo estiver vazio, não faz nada
  }

  const mensagemEnviada = document.createElement('div');
  mensagemEnviada.textContent = 'Mensagem enviada!';
  mensagemEnviada.className = 'mensagem-enviada';

  form.parentNode.insertBefore(mensagemEnviada, form.nextSibling);

  setTimeout(() => {
    mensagemEnviada.style.transform = 'translateX(-100%)';
    mensagemEnviada.style.opacity = '0';
    setTimeout(() => {
      mensagemEnviada.remove();
      limparCampos(); // Limpa os campos de input
    }, 1000);
  }, 3000);
}

form.addEventListener('submit', enviarMensagem);