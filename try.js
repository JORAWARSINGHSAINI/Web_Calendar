var time=document.querySelector("#time");
var d1=new Date();
setInterval(function(){
    var d=new Date();

var hour=String(d.getHours());
var minute=String(d.getMinutes());
    if(Number(minute)<10)
        minute="0"+minute;
var second_num=d.getSeconds();
var second;
    if(second_num<10)
        second="0"+String(second_num);  
    else
        second=String(second_num);
    if(hour>=10)
time.innerHTML=hour+":"+minute+":"+second;
    else
    time.innerHTML="0"+hour+":"+minute+":"+second;
if(hour<12)
    time.innerHTML+=" AM";
else
    time.innerHTML+=" PM";    
},100);


var month=d1.getMonth(); //curr month;
var year=d1.getFullYear();
var d2=new Date(year,month,1);
var day=d2.getDay();
var x=document.querySelector(".day");
var margin=String(day*52)+"px";
x.style.marginLeft=margin;
//month of feb
if(month==1)
    {
        
        document.querySelectorAll(".day")[28].style.visibility="hidden";
        document.querySelectorAll(".day")[29].style.visibility="hidden";
        document.querySelectorAll(".day")[30].style.visibility="hidden";
    }
//leap year
if((year%400)===0 ||((year%4)===0) && (year%100!==0))
    {
        document.querySelectorAll(".day")[28].style.visibility="visible";
    }
   //30day month
if((month===3) || (month===5) ||(month===8) ||(month===10) ){
   document.querySelectorAll(".day")[30].style.visibility="hidden";
   }
// mark sundays red;
   var y;
for(var i=1;i<=7;i++)
{
    var d3=new Date(year,month,i);
    if(d3.getDay()==0)
        {
            y=d3.getDate();
            break;
        }
}

// all sundays red;
for(var i=y;i<=31;i=i+7){
    var x=document.querySelectorAll(".day")[i-1];
    if(x!=="undefined")
        {
            x.style.color="red";
        }
}

//current day black with white text;
var curr_day=d1.getDate();
var days=document.querySelector("#days");
days.children[curr_day-1].style.color="white";
days.children[curr_day-1].style.backgroundColor="black";