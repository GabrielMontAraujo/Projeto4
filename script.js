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
  if (data > 0) {
    document.getElementById('nroItem').innerText = data
    document.getElementById('lblCart__sale').innerText =
      ' $' + price + ' * ' + data + ' = ' + '$' + sale
  }
  empty()
}

const btnSendToCart = document.querySelector('#btnCart')
btnSendToCart.addEventListener('click', sendToCart)

function sendToCart(e) {
  const itemNro = document.querySelector('#nroItem')
  if (data > 0) {
    itemNro.classList.add('visible')
    full()
  } else {
    empty()
  }
}

function cart() {
  if (data == 0) {
    empty
  }
}

const btnClear = document.querySelector('#deleteModal')
btnClear.addEventListener('click', clearM)

function clearM() {
  data = 0
  document.getElementById('lbQtde').innerText = data
  document.getElementById('nroItem').innerText = data
  document.getElementById('lblCart__sale').innerText = 'Your cart is empty'
  sendToCart()
  full()
}

function empty(e) {
  const emptyCart = document.querySelector('.modalImage')
  emptyCart.classList.add('visible')

  const emptyCart2 = document.querySelector('#modalTitle')
  emptyCart2.classList.add('visible')
}

function full(e) {
  const fullCart = document.querySelector('.modalImage')
  fullCart.classList.remove('visible')

  const fullCart2 = document.querySelector('#modalTitle')
  fullCart2.classList.remove('visible')
}

const btnModal = document.querySelector('.btn-primary')
btnModal.addEventListener('click', openModal)

function openModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.add('visible')
  cart()
}
const btnClose = document.querySelectorAll('#closeModal')
btnClose.forEach(fechaE1 => fechaE1.addEventListener('click', closeModal))

function closeModal(e) {
  const modalEl = document.querySelector('#modalExemplo')
  modalEl.classList.remove('visible')
}
