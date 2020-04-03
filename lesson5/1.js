'use strict';
let amount = 0;
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let expenses = [];
let money; 
//+prompt('Ваш месячный доход?','');
let income = 2;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 50000;
let period = 5;
//let expenses1 = +prompt('Введите обязательную статью расходов?','');
//let amount1 = +prompt('Во сколько это обойдется?','');
//let expenses2 = +prompt('Введите обязательную статью расходов?','');
//let amount2 = +prompt('Во сколько это обойдется?','');
let start = function() {

do { 
money = +prompt('Ваш месячный доход?',50000)
} 
while(!isNumber(money));

};

start();


let getExpensesMonth = function() {
    

for (let i = 0; i < 2; i++) {
    let sum;
    expenses[i] = prompt('Введите обязательную статью расходов?','Садик государственный');

    do { 
    sum = prompt('Во сколько это обойдется?','');
 }
   while(!isNumber(sum));
   amount += +sum;
}
console.log(amount);
return amount;
}

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function () {
return money - expensesAmount;
}


let AccumulatedMonth = getAccumulatedMonth (money, expensesAmount);

console.log (AccumulatedMonth);

let getTargetMonth = function() {
    return Math.ceil(mission / AccumulatedMonth);
    
}
let TargetMonth = getTargetMonth ();

let check = function() {
    if (TargetMonth <= 0) {
        console.log('Цель не будет достигнута:');
    } else {
        console.log('Цель будет достигнута:' + TargetMonth);
    }
}
 let launchcheck = check();





let budgetDay = AccumulatedMonth / 30;



if (budgetDay > 1200) {
    alert('У вас высокий уровень дохода');

} else if (budgetDay > 600 || budgetDay < 1200) {
    
    alert('У вас средний уровень дохода');

} else if (budgetDay < 600) {
    
    alert('К сожалению у вас уровень дохода ниже среднего')
} else if (budgetDay = -budgetDay) {
    alert('Что-то пошла не так');
};








