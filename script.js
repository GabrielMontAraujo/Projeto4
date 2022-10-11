var data = 0
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
