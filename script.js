// let participantes = [
//   {
//     nome: 'Fernanda Costa',
//     email: 'fernanda@test.com',
//     dataInscricao: new Date(2024, 5, 9, 8, 50),
//     dataCheckIn: new Date(2024, 5, 9, 9, 5),
//   },
//   {
//     nome: 'Carlos Pereira',
//     email: 'carlos@test.com',
//     dataInscricao: new Date(2024, 5, 7, 11, 10),
//     dataCheckIn: null,
//   },
//   {
//     nome: 'Gabriel Santos',
//     email: 'gabriel@test.com',
//     dataInscricao: new Date(2024, 4, 30, 18, 35),
//     dataCheckIn: null,
//   },
//   {
//     nome: 'Eduardo Alves',
//     email: 'eduardo@test.com',
//     dataInscricao: new Date(2024, 4, 28, 10, 2),
//     dataCheckIn: new Date(2024, 4, 28, 10, 30),
//   },
//   {
//     nome: 'Bianca Rocha',
//     email: 'bianca@test.com',
//     dataInscricao: new Date(2024, 4, 25, 10, 2),
//     dataCheckIn: new Date(2024, 4, 25, 10, 30),
//   },
//   {
//     nome: 'Rafael Nunes',
//     email: 'rafael@test.com',
//     dataInscricao: new Date(2024, 4, 20, 13, 25),
//     dataCheckIn: null,
//   },
//   {
//     nome: 'João Souza',
//     email: 'joao@test.com',
//     dataInscricao: new Date(2024, 4, 11, 9, 15),
//     dataCheckIn: new Date(2024, 4, 11, 9, 45),
//   },
//   {
//     nome: 'Maria Silva',
//     email: 'maria@test.com',
//     dataInscricao: new Date(2024, 3, 10, 14, 30),
//     dataCheckIn: null,
//   },
//   {
//     nome: 'Ana Oliveira',
//     email: 'ana@test.com',
//     dataInscricao: new Date(2024, 2, 5, 16, 40),
//     dataCheckIn: new Date(2024, 2, 5, 17, 20),
//   },
//   {
//     nome: 'Camila lima',
//     email: 'camila@test.com',
//     dataInscricao: new Date(2024, 1, 23, 19, 23),
//     dataCheckIn: null,
//   },
//   {
//     nome: 'Lucas Souza',
//     email: 'lucas@test.com',
//     dataInscricao: new Date(2024, 0, 1, 19, 23),
//     dataCheckIn: new Date(2024, 0, 1, 20, 20),
//   },  
// ];

// const criarNovoParticipante = (participante) => {
//   const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
//   let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

//   if (participante.dataCheckIn == null) {
//     dataCheckIn = `
//       <button 
//         data-email="${participante.email}"
//         onClick="fazerCheckIn(event)"
//       >
//         Confirmar check-in
//       </button>
//     `
//   }

//   return `
//     <tr>
//       <td>
//         <strong>${participante.nome}</strong>
//         <br>
//         <small>${participante.email}</small>
//       </td>
//       <td>${dataInscricao}</td>
//       <td>${dataCheckIn}</td>
//     </tr>
//   `
// }

// const atualizarLista = (participantes) => {
//   let output = ''
//   for (let participante of participantes) {
//     output = output + criarNovoParticipante(participante)
//   }

//   document.querySelector('tbody').innerHTML = output
// }

// atualizarLista(participantes)

// const adicionarParticipante = (event) => {
//   event.preventDefault()

//   const dadosDoFormulario = new FormData(event.target)

//   const participante = {
//     nome: dadosDoFormulario.get('nome'),
//     email: dadosDoFormulario.get('email'),
//     dataInscricao: new Date(),
//     dataCheckIn: null,
//   }

//   const participanteExiste = participantes.find(
//     (p) => p.email == participante.email
//   )

//   if (participanteExiste) {
//     alert('Email já cadastrado!')
//     return
//   }

//   participantes = [participante, ...participantes]
//   atualizarLista(participantes)

//   event.target.querySelector('[name="nome"]').value = ''
//   event.target.querySelector('[name="email"]').value = ''
// }

// const fazerCheckIn = (event) => {
//   const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

//   if (confirm(mensagemConfirmacao) == false) {
//     return
//   }

//   const participante = participantes.find(
//     (p) => p.email == event.target.dataset.email
//   )

//   participante.dataCheckIn = new Date()

//   atualizarLista(participantes)
// }

let participants = [
  {
    name: 'Fernanda Costa',
    email: 'fernanda@test.com',
    registrationDate: new Date(2024, 5, 9, 8, 50),
    checkInDate: new Date(2024, 5, 9, 9, 5),
  },
  {
    name: 'Carlos Pereira',
    email: 'carlos@test.com',
    registrationDate: new Date(2024, 5, 7, 11, 10),
    checkInDate: null,
  },
  {
    name: 'Gabriel Santos',
    email: 'gabriel@test.com',
    registrationDate: new Date(2024, 4, 30, 18, 35),
    checkInDate: null,
  },
  {
    name: 'Eduardo Alves',
    email: 'eduardo@test.com',
    registrationDate: new Date(2024, 4, 28, 10, 2),
    checkInDate: new Date(2024, 4, 28, 10, 30),
  },
  {
    name: 'Bianca Rocha',
    email: 'bianca@test.com',
    registrationDate: new Date(2024, 4, 25, 10, 2),
    checkInDate: new Date(2024, 4, 25, 10, 30),
  },
  {
    name: 'Rafael Nunes',
    email: 'rafael@test.com',
    registrationDate: new Date(2024, 4, 20, 13, 25),
    checkInDate: null,
  },
  {
    name: 'João Souza',
    email: 'joao@test.com',
    registrationDate: new Date(2024, 4, 11, 9, 15),
    checkInDate: new Date(2024, 4, 11, 9, 45),
  },
  {
    name: 'Maria Silva',
    email: 'maria@test.com',
    registrationDate: new Date(2024, 3, 10, 14, 30),
    checkInDate: null,
  },
  {
    name: 'Ana Oliveira',
    email: 'ana@test.com',
    registrationDate: new Date(2024, 2, 5, 16, 40),
    checkInDate: new Date(2024, 2, 5, 17, 20),
  },
  {
    name: 'Camila Lima',
    email: 'camila@test.com',
    registrationDate: new Date(2024, 1, 23, 19, 23),
    checkInDate: null,
  },
  {
    name: 'Lucas Souza',
    email: 'lucas@test.com',
    registrationDate: new Date(2024, 0, 1, 19, 23),
    checkInDate: new Date(2024, 0, 1, 20, 20),
  },
];

const createNewParticipant = (participant) => {
  const registrationDate = dayjs(Date.now()).to(participant.registrationDate)
  let checkInDate = dayjs(Date.now()).to(participant.checkInDate)

  if (participant.checkInDate == null) {
    checkInDate = `
      <button 
        data-email="${participant.email}"
        onClick="performCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
    <tr>
      <td>
        <strong>${participant.name}</strong>
        <br>
        <small>${participant.email}</small>
      </td>
      <td>${registrationDate}</td>
      <td>${checkInDate}</td>
    </tr>
  `
}

const updateList = (participants) => {
  let output = ''
  for (let participant of participants) {
    output = output + createNewParticipant(participant)
  }

  document.querySelector('tbody').innerHTML = output
}

updateList(participants)

const addParticipant = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participant = {
    name: formData.get('nome'),
    email: formData.get('email'),
    registrationDate: new Date(),
    checkInDate: null,
  }

  const participantExists = participants.find(
    (p) => p.email == participant.email
  )

  if (participantExists) {
    alert('Email já cadastrado!')
    return
  }

  participants = [participant, ...participants]
  updateList(participants)

  event.target.querySelector('[name="nome"]').value = ''
  event.target.querySelector('[name="email"]').value = ''
}

const performCheckIn = (event) => {
  const confirmationMessage = 'Tem certeza que deseja fazer o check-in?'

  if (confirm(confirmationMessage) == false) {
    return
  }

  const participant = participants.find(
    (p) => p.email == event.target.dataset.email
  )

  participant.checkInDate = new Date()

  updateList(participants)
}
