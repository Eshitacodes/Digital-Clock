function updateClock()
{
    const now=new Date();
let hour=now.getHours();

hour=hour<12?hour:hour%12;
hour=hour.toString().padStart(2,0)

const minute=now.getMinutes().toString().padStart(2,0);
const second=now.getSeconds().toString().padStart(2,0);
const meridiem =hour<12?"PM":"AM";
const timeString=`${hour}:${minute}:${second} ${meridiem}`;



document.getElementById("clock").textContent=timeString;
}

updateClock();
setInterval(updateClock,1000);
