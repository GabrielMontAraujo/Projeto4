var data = 0
var price = document.getElementById('valueDesc').textContent
var qtde = document.getElementById('lbQtde').textContent

function increment() {
  data = data + 1
  document.getElementById('lbQtde').innerText = data
}
function decrement() {
  if (data > 0) {
    data = data - 1
    document.getElementById('lbQtde').innerText = data
  }
}

function productSale() {
  var sale = data * price
  sendToCart()
  document.getElementById('nroItem').innerText = data
}

const btnSendToCart = document.querySelector('#btnCart')
btnSendToCart.addEventListener('click', sendToCart)

function sendToCart(e) {
  const itemNro = document.querySelector('#nroItem')
  if (data > 0) {
    itemNro.classList.add('visible')
  }
}

const btnModal = document.querySelector('.btn-primary')
btnModal.addEventListener('click', openModal)

function openModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.add('visible')
}

const btnClose = document.querySelectorAll('#closeModal')
btnClose.forEach(fechaE1 => fechaE1.addEventListener('click', closeModal))

function closeModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.remove('visible')
}
