document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayer  =  getInputFieldElementById('per-player-field');
    const totalPlayers = getTextElementById('counter');

    const playerExpense = perPlayer * totalPlayers;
    if(isNaN(perPlayer) || perPlayer == '' || perPlayer < 0 ){
        alert('Please enter a valid number');
        return;

    }
     setTextElementById('expense-field', playerExpense);
})

document.getElementById('btn-total').addEventListener('click', function(){
    const managerExpense =  getInputFieldElementById('manager-field');
    if(isNaN(managerExpense) || managerExpense == '' ){
        alert('Please enter  a valid number');
        return;

    }
    const coachExpense =  getInputFieldElementById('coach-field');
    if(isNaN(coachExpense) || coachExpense == '' ){
        alert('Please enter a  valid number');
        return;

    }
    const playerExpense = getTextElementById('expense-field')
    const Total = managerExpense + coachExpense + playerExpense;
    setTextElementById('total-field',Total);

})