var random1 = 1 + Math.floor(Math.random()*6);
document.querySelector('.img1').setAttribute('src','images/dice'+random1+'.png')

var random2 = 1 + Math.floor(Math.random()*6);
document.querySelector('.img2').setAttribute('src','images/dice'+random2+'.png')

if(random1 > random2){
    document.querySelector('h1').textContent = 'Player 1 Wins!';
}
else if(random2 > random1){
    document.querySelector('h1').textContent = 'Player 2 Wins!';
}
else{
    document.querySelector('h1').textContent = 'Draw!';
}

