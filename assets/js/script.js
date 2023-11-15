// BOTÃO DE VOLTAR AO TOPO
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backTopButton = document.getElementById("back-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopButton.style.display = "block";
    backTopButton.removeAttribute("disabled");
  } else {
    backTopButton.style.display = "none";
    backTopButton.setAttribute("disabled", "disabled");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//FUNÇÃO MAQUINA DE ESCREVER NO SECTION HOME
function maquinaEscrever() {
  const strings = ['Frontend', 'Backend', 'Fullstack'];
  const texto = document.getElementById('maquina-de-escrever');
  
  let stringAtual = 0;
  let index = 0;
  let apagando = false;

  function escrever() {
    if (index < strings[stringAtual].length && !apagando) {
      texto.innerHTML += strings[stringAtual].charAt(index);
      index++;
      setTimeout(escrever, 100);
    } else if (apagando && index >= 0) {
      texto.innerHTML = strings[stringAtual].substring(0, index);
      index--;
      setTimeout(escrever, 100);
    } else {
      apagando = true;
      setTimeout(escrever, 500);
    }

    if (index < 0) {
      apagando = false;
      stringAtual++;
      if (stringAtual >= strings.length) {
        stringAtual = 0;
      }
      index = 0;
    }
  }
  escrever();
}

maquinaEscrever();


// MENU HAMBURGUER
const menuHamburguerButton = document.getElementById('menu-hamburguer');
const header = document.getElementById('header');
const navItems = document.querySelectorAll('.nav-item');
const iconMobile = document.getElementById('icon-mobile');

menuHamburguerButton.addEventListener('click', () => {
  if (header.style.display === 'none') {
    header.style.display = 'block';
    header.classList.add('show-mobile');
    iconMobile.classList.replace('fa-bars', 'fa-times');
  } else {
    header.style.display = 'none';
    header.classList.remove('show-mobile');
    iconMobile.classList.replace('fa-times', 'fa-bars');
  }
});

if (window.innerWidth <= 768) {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      header.style.display = 'none';
      header.classList.remove('show-mobile');
      menuHamburguerButton.classList.replace('fa-times', 'fa-bars');
      iconMobile.classList.replace('fa-times', 'fa-bars');
    });
  });
}

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

// SKILLS
const skills = [
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
    porcentagem: "90",
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

const skillNav = document.getElementById('skill-nav');
const progressBarDelay = 500;

function createSkillNavItem(skill) {
  const skillNavItem = document.createElement('li');
  skillNavItem.innerHTML = `
    <div class="skill-container">
      <p>${skill.nome}</p>
      <div class="skill-progress">
        <div class="progress-fill"></div>
      </div>
    </div>
  `;

  const progressFill = skillNavItem.querySelector('.progress-fill');
  const width = skill.porcentagem;
  setTimeout(() => {
    progressFill.style.width = `${width}%`;
  }, progressBarDelay);

  return skillNavItem;
}

function renderSkills() {
  skills.forEach((skill) => {
    skillNav.appendChild(createSkillNavItem(skill));
  });
}

renderSkills();

// PROJETOS
const projects = [
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
    link: '#'
  },
];

const navProjects = document.getElementById('navProjects');

function createProjectItem(project) {
  const projectItem = document.createElement('div');

  const nomeProject = document.createElement('p');
  nomeProject.textContent = project.nome;

  const imgProject = document.createElement('img');
  imgProject.src = project.image;

  const linkProject = document.createElement('a');
  linkProject.textContent = "Acessar";
  linkProject.href = project.link;

  projectItem.classList.add('unidade-skill');
  projectItem.appendChild(nomeProject);
  projectItem.appendChild(imgProject);
  projectItem.appendChild(linkProject);

  return projectItem;
}

function renderProjects() {
  projects.forEach((project) => {
    navProjects.appendChild(createProjectItem(project));
  });
}

renderProjects();

// CONTATO
const form = document.querySelector('form');
const submitButton = document.getElementById('btn-enviar-contato');

function clearFields() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

function sendMessage(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    return;
  }

  const successMessage = document.createElement('div');
  successMessage.textContent = 'Mensagem enviada!';
  successMessage.className = 'success-message';

  form.parentNode.insertBefore(successMessage, form.nextSibling);

  setTimeout(() => {
    successMessage.style.transform = 'translateX(-100%)';
    successMessage.style.opacity = '0';
    setTimeout(() => {
      successMessage.remove();
      clearFields();
    }, 1000);
  }, 3000);
}

form.addEventListener('submit', sendMessage);