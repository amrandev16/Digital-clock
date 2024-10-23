const hoursEl =document.getElementById("hour");
const minutesEl =document.getElementById("minutes");
const secondEl =document.getElementById("seconds");
const ampmEl =document.getElementById("ampm");

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"


    if(h > 12){
        h = h-12
        ampm ="PM"
    }


    // h = h < 10 ? "0" + h:h;
    // m = h < 10 ? "0" + m:h;
    // s = h < 10 ? "0" + s:h;


    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondEl.innerText = s;
    ampmEl,(innerText = ampm);

    setTimeout(()=>{

        updateTime()

    },1000)


}

updateTime()