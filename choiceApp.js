function calculate(){
    const x = parseInt(document.querySelector('#num1').value)
    const y = parseInt(document.querySelector('#num2').value)
    result = Math.pow(x,y)
    document.querySelector('#result').innerHTML = result
}