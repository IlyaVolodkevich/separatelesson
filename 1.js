let money = +prompt('Ваш месячный доход?','');
let income = 2;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 50000;
let period = 5;
let expenses1 = prompt('Введите обязательную статью расходов?','');
let amount1 = +prompt('Во сколько это обойдется?','');
let expenses2 = prompt('Введите обязательную статью расходов?','');
let amount2 = +prompt('Во сколько это обойдется?','');

let budgetMonth = money - (amount1 + amount2); 
let budgetDay = budgetMonth / 30;
console.log (budgetMonth);
console.log(Math.round(mission / budgetMonth));
console.log(Math.floor(budgetDay));

if (budgetDay > 1200) {
    alert('У вас высокий уровень дохода');

} else if (budgetDay > 600 || budgetDay < 1200) {
    
    alert('У вас средний уровень дохода');

} else if (budgetDay < 600) {
    
    alert('К сожалению у вас уровень дохода ниже среднего')
} else if (budgetDay = -budgetDay) {
    alert('Что-то пошла не так');
};


