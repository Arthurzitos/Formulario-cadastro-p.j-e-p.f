const form = document.querySelector('form')

const firstNameInput = document.querySelector('input.firstName')
const firstNameSpanError = document.querySelector('span.firstName')

const lastNameInput = document.querySelector('input.lastName')
const lastNameSpanError = document.querySelector('span.lastName')

const emailInput = document.querySelector('input.e-mail')
const emailSpanError = document.querySelector('span.e-mail')

const confirmEmailInput = document.querySelector('input.confirm-email')
const confirmEmailSpanError = document.querySelector('span.confirm-email')

const bdayInput = document.querySelector('input.bday')
const bdaySpanError = document.querySelector('span.bday')

const cpfInput = document.querySelector('input.cpf')
const cpfSpanError = document.querySelector('span.cpf')


form.addEventListener("submit", e => {
    e.preventDefault()

   if (firstNameInput.value === "") {
       firstNameSpanError.classList.add('error-text')
    } else {
        firstNameSpanError.classList.remove('error-text')
    }

    if (lastNameInput.value === "") {
        lastNameSpanError.classList.add('error-text')
    } else {
        lastNameSpanError.classList.remove('error-text')
    }

    if (emailInput.value === "") {
        emailSpanError.classList.add('error-text')
    } else {
        emailSpanError.classList.remove('error-text')
    }

    if (confirmEmailInput.value === "") {
        confirmEmailSpanError.classList.add('error-text')
    } else {
        confirmEmailSpanError.classList.remove('error-text')
    }

    if (bdayInput.value === "") {
        bdaySpanError.classList.add('error-text')
    } else {
        bdaySpanError.classList.remove('error-text')
    }

    if (cpfInput.value === "") {
        cpfSpanError.classList.add('error-text')
    } else {
        cpfSpanError.classList.remove('error-text')
    }
})