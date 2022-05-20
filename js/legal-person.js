const form = document.querySelector('form')

const fantasyNameInput = document.querySelector('input.fantasy-name')
const fantasyNameSpanError = document.querySelector('span.fantasyName')

const corporateNameInput = document.querySelector('input.corporate-name')
const corporateNameSpanError = document.querySelector('span.corporateName')

const cnpjInput = document.querySelector('input.cnpjErro')
const cnpjSpanError = document.querySelector('span.cnpjErro')

const ieInput = document.querySelector('input.ieErro')
const ieSpanError = document.querySelector('span.ieErro')

form.addEventListener("submit", e => {
    e.preventDefault()

    if (fantasyNameInput.value === "") {
      fantasyNameSpanError.classList.add('error-text')
    } else {
      fantasyNameSpanError.classList.remove('error-text')
    }

    if (corporateNameInput.value === "") {
      corporateNameSpanError.classList.add('error-text')
    } else {
      corporateNameSpanError.classList.remove('error-text')
    }

    if (cnpjInput.value === "") {
      cnpjSpanError.classList.add('error-text')
    } else {
      cnpjSpanError.classList.remove('error-text')
    }

    if (ieInput.value === "") {
      ieSpanError.classList.add('error-text')
    } else {
      ieSpanError.classList.remove('error-text')
    }
})