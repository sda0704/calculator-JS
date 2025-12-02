
const display = document.getElementById('result');




function appendToDisplay(value){
    const currentValue = display.value;
    const lastChar = currentValue[currentValue.lenght - 1];
    const operations = ['+', '-', '*', '/', '%', '.'];

    if(operations.includes(value) && operations.includes(lastChar)){
        display.value = currentValue.slice(0, -1) + value;

    } else{
        display.value +=value;
    }


}
function clearDisplay() {
    display.value = '';
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
       
        let expression = display.value
            
        
        
        expression = expression.replace(/(\d+)%/g, (match, num) => {
            return `(${num}/100)`;
        });
  
      
        const result = eval(expression);
        

        if (!isFinite(result)) {
            alert("Нельзя делить на ноль!");
        }
        
       
        display.value = parseFloat(result.toFixed(10)).toString();
        
    } catch (error) {
        display.value = 'Ошибка';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}
window.onload = function() {
    clearDisplay();
};