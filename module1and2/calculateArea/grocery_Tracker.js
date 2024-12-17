let amount1;
let amount2;
let amount3;

function calculateTotalAmount(){
    amount1 = parseFloat(document.getElementById('groceryAmount1').value);
    amount2 = parseFloat(document.getElementById('groceryAmount2').value);
    amount3 = parseFloat(document.getElementById('groceryAmount3').value);
    let sum = amount1 + amount2 + amount3; 
    document.getElementById('result').innerHTML = `The total abount is: ${sum}`;
}
