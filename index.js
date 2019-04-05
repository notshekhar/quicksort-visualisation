let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let arr = new Array()
for (let i = 0; i < canvas.width / 20; i++) {
  arr.push(Math.random() * 400)
}
//clearing canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let x = 2

function draw() {
  //clearing canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  let x = 10
  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 15
    ctx.moveTo(x, canvas.height)
    ctx.lineTo(x, canvas.height - y)
    ctx.stroke()
    x += 20
  }
}


function quicksort(arr, start, end) {
  if (start >= end) {
    return true
  }else{
    let index = partition(arr, start, end)
    quicksort(arr, start, index - 1)
    quicksort(arr, index + 1, end)
  }
}

function partition(arr, start, end) {
  let pivot = end
  let index = start
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }else{

    }
  }
  swap(arr, pivot, index)
  return index
}
function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

quicksort(arr, 0, arr.length-1)
draw()
// let interval = setInterval(() => {
// }, 250)