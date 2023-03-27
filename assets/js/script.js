const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval (function time() {
    let datetoday = new Date();
     let hours = datetoday.getHours();
     let minutes = datetoday.getUTCMinutes();
     let seconds = datetoday.getSeconds();
   
     if(hours <10) hours = '0'+ hours;
     if(minutes <10) minutes = '0'+ minutes;
     if(seconds <10) seconds = '0'+ seconds;

horas.textContent = hours;
minutos.textContent = minutes;
segundos.textContent=seconds;

})