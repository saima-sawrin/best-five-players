document.getElementById('btn-select1').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    playerList.appendChild(li);
    
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;

    if(totalPlayers >5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);



})

document.getElementById('btn-select2').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;
    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);
    

})
document.getElementById('btn-select3').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;
    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);

})
document.getElementById('btn-select4').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Vítor Machad';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;
    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);

    

})
document.getElementById('btn-select5').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Sergio Ramos';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;

    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);

})
document.getElementById('btn-select6').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');

    const li = document.createElement('li');
    li.innerText = 'Renato Sanches';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;

    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);
  

})
document.getElementById('btn-select7').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    playerList.appendChild(li);
    
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;

    if(totalPlayers >5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);



})

document.getElementById('btn-select8').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;
    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);
    

})
document.getElementById('btn-select9').addEventListener('click', function(){
    const playerList = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé';
    playerList.appendChild(li);
    const previousPlayer = getTextElementById('counter');
    const totalPlayers = previousPlayer + 1;
    if(totalPlayers > 5){
        alert('Can not select more than Five players');
        return;
    }
    setTextElementById('counter', totalPlayers);

})




