//analog
const hour=document.querySelector(".hr");
const minute=document.querySelector(".min");
const second=document.querySelector(".sec");
function runanalog(){
    var time=new Date();                  /* we get evrthing as time cant rotate using that valu6 */
    var sec=time.getSeconds()/60;        /* to rotate using deg */
    var min=(sec+time.getMinutes())/60;
    var hr=(min+time.getHours())/12;
    
    hour.style.setProperty('--rotation',hr*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);
}
runanalog();
setInterval(runanalog,1000);



//digital
var digitaltime=document.querySelector(".digitaltime");


const h=document.querySelectorAll(".h");
const m=document.querySelectorAll(".m");
const s=document.querySelectorAll(".s");


function runclock(){
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var ampm="AM";
    if(hrs>12){
        hrs=hrs-12;     //normal tyming
        ampm="PM";
    }
    else if(hrs==0){
        hrs=12;         //mid night 00 = 12
        ampm="AM";
    }
    //console.log(`${hrs} : ${mins} : ${secs} ${ampm}`);
    
    hrs=hrs<10?"0"+hrs:hrs;
    mins=mins<10?"0"+mins:mins;
    secs=secs<10?"0"+secs:secs;
    //digitaltime.textContent=`${hrs} : ${mins} : ${secs} ${ampm}`;
    
    //change to str otherwise shows undefined 
    hrs=hrs.toString();
    mins=mins.toString();
    secs=secs.toString();
    h[0].innerHTML=hrs[0];
    h[1].innerHTML=hrs[1];
    m[0].innerHTML=mins[0];
    m[1].innerHTML=mins[1];
    s[0].innerHTML=secs[0];
    s[1].innerHTML=secs[1];
    txt=ampm;
}
runclock();
setInterval(runclock,1000);    // automatic call each second