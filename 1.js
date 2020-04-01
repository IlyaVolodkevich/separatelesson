'use strict';
let money = +prompt('Ваш месячный доход?','');
let income = 2;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 50000;
let period = 5;
let expenses1 = +prompt('Введите обязательную статью расходов?','');
let amount1 = +prompt('Во сколько это обойдется?','');
let expenses2 = +prompt('Введите обязательную статью расходов?','');
let amount2 = +prompt('Во сколько это обойдется?','');


function getExpensesMonth (a, b,) {
    return a + b;

}

let resExpensesMonth = getExpensesMonth(amount1, amount2);

console.log(resExpensesMonth);

function getAccumulatedMonth(a, b, ) {
return a - b;
}

let AccumulatedMonth = getAccumulatedMonth (money, resExpensesMonth);

console.log (AccumulatedMonth);

function getTargetMonth (a, b) {
    return a / b;
}
let TargetMonth = getTargetMonth (mission, AccumulatedMonth);

console.log(TargetMonth);



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








