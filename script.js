let modalIsOpen = false;
let showModal = document.getElementById("modal");

function toggleModal() {
  modalIsOpen = !modalIsOpen;

  if (modalIsOpen) {
    showModal.style.display = "block";
    document.querySelector("#modal input[type='text']").value = emailInput.value;
  } else {
    showModal.style.display = "none";
  }
}

function closeModal(event) {
  if (event.key === "Escape" && modalIsOpen) {
    toggleModal();
  }
}

let buttonOpenModal = document.getElementById("register-modal");
let buttonSubscribeModal = document.getElementById("subscribe-modal-btn");

buttonOpenModal.addEventListener("click", toggleModal);
buttonSubscribeModal.addEventListener("click", toggleModal);

document.addEventListener("keydown", closeModal);

// Validação de Formulários
document.getElementById('submitButton').addEventListener('click', function(event) {
  var inputs = document.querySelectorAll('#register input[type="text"]');
  var filled = true;

  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      filled = false;
    }
  });

  if (!filled) {
    alert('Por favor, preencha todos os campos do formulário.');
    event.preventDefault();
    return; 
  }

  alert('Cadastro efetuado com sucesso!');

});