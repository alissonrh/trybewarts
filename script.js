const email = document.querySelector('#id-email');
const password = document.querySelector('#id-password');
function validateEmail(event) {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    event.preventDefault();
    alert('Olá, Tryber!');
    console.log(email.value);
  } else {
    event.preventDefault();
    alert('Email ou senha inválidos.');
  }
}

const btEntrar = document.querySelector('#btEnter');
btEntrar.addEventListener('click', validateEmail);

const btnSend = document.querySelector('#submit-btn');
const input = document.querySelector('#agreement');

function buttonSend(event) {
  if (input.checked === true) {
    btnSend.disabled = false;
  } else {
    event.preventDefault();
  }
}

input.addEventListener('click', buttonSend);

//--

const inDigitado = document.getElementById('textarea');
const outCounter = document.querySelector('#counter');

const counter = () => {
  const start = inDigitado.maxLength;
  const resto = start - inDigitado.value.length;
  outCounter.textContent = resto;
};
inDigitado.addEventListener('keyup', counter);
counter();

//--
const formTag = document.getElementById('evaluation-form');
const inName = document.getElementById('input-name');
const inLastName = document.getElementById('input-lastname');
const inEmail = document.getElementById('input-email');
const inHouse = document.getElementById('house');
const inFamily = document.querySelectorAll('.family');
const inMaterias = document.querySelectorAll('.subject');
const inAvaliacao = document.querySelectorAll('.input-radio');

function getAvaliacao() {
  for (let i = 0; i < inAvaliacao.length; i += 1) {
    if (inAvaliacao[i].checked) {
      return inAvaliacao[i].value;
    }
  }
}

function getFamily() {
  for (let i = 0; i < inFamily.length; i += 1) {
    if (inFamily[i].checked) {
      return inFamily[i].value;
    }
  }
}

function getMaterias() {
  const result = [];
  for (let i = 0; i < inMaterias.length; i += 1) {
    if (inMaterias[i].checked) {
      result.push(inMaterias[i].value);
    }
  }
  return result.join(', ');
}

const out = () => {
  formTag.innerText = `Nome: ${inName.value} ${inLastName.value}\n 
   Email: ${inEmail.value}\n
   Casa: ${inHouse.value}\n
   Família: ${getFamily()} \n
   Matérias: ${getMaterias()} \n
   Avaliação: ${getAvaliacao()} \n
   Observações: ${inDigitado.value}`;
};

btnSend.addEventListener('click', out);
