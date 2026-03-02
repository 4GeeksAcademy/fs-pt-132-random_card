import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(randomGenerator())
};

  const randomGenerator = () => Math.floor(Math.random()*10)

const palos = ['♦', '♥', '♠', '♣']

const numOne = document.querySelector('#numOne')
const numTwo = document.querySelector('#numTwo')
const ejecutar = document.querySelector('#ejecutar')
const total = document.querySelector('#total')
const sing = document.querySelector('#sign') 
let fNum = 0
let sNum = 0
let operation = ''
const mapper = {
  sumar: '+',
  restar: '-'
}

const  getOperationSign = (usedSign) =>{
  if (usedSign == mapper.sumar) return operation = '+' 
}  
numOne.addEventListener('change', e=> {
  fNum = e.target.value
  console.log(fNum)
})
numTwo.addEventListener('change', e=> {
  sNum = e.target.value
  console.log(sNum)
})
sing.addEventListener('change', e=>getOperationSign(e.target.value))

const ejecutarCalculadora = ()=>{
  console.log(typeof fNum, typeof sNum)
  console.log(typeof parseInt(fNum))
  if (fNum >= 0 && sNum >= 0){
    total.value = eval(fNum + operation + sNum)
  }
}

ejecutar.addEventListener('click', ejecutarCalculadora)


eval('console.log("desde eval")')