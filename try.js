var time = document.querySelector("#time");
var image_arr=[
"https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://image.freepik.com/free-vector/sunset-scenery-with-sea-palm-silhouette_116220-28.jpg",
"https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg",
"https://thumbs.dreamstime.com/b/beautiful-golden-autumn-scenery-trees-golden-leaves-sunshine-scotland-united-kingdom-beautiful-golden-autumn-124278811.jpg",
"https://3.bp.blogspot.com/-czZLqG2KVlQ/TozQMC_YotI/AAAAAAAAAfk/nTfRLpVmb3g/s1600/nature+scenery+wallpaper-1.jpg",
"https://i.pinimg.com/originals/0d/8e/02/0d8e0215230f829053d078247b5d5bec.jpg",
"https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Julietphotography,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1535456857/udrc9x3wkoi0pgalbwwz.jpg"];
var events = new Array();
var date,month,year;

function initialize()
{
    var d1 = new Date();
    console.log(d1)
    date=d1.getDate();
    month=d1.getMonth(); 
    year=d1.getFullYear();
}
initialize();
create_calendar();
// adding for getting next month

var after=document.querySelector("#after");    
after.addEventListener("click",function() {
    month+=1;
    if(month>11)
    {
        month = 0;
        year+=1;
    }
    create_calendar();
});

// adding for getting previous month
var before=document.querySelector("#before");
before.addEventListener("click",function() {
    month-=1;
    if(month < 0)
    {
        month = 11;
        year-=1;
    };
    create_calendar();
});

//setting time to show
setInterval(function(){
    var d = new Date();

var hour=String(d.getHours());
var minute=String(d.getMinutes());
    if(Number(minute) < 10)
        minute = "0"+minute;
var second_num=d.getSeconds();
var second;
    if(second_num<10)
        second = "0"+String(second_num);  
    else
        second=String(second_num);
    if(hour>=10)
time.innerHTML = hour+":"+minute+":"+second;
    else
    time.innerHTML = "0"+hour+":"+minute+":"+second;
if(hour<12)
    time.innerHTML+=" AM";
else
    time.innerHTML+=" PM";    
},100);

function set_image()
{
    //set image from array
    var image=document.querySelector("#photo");
    var value=String(image_arr[Math.floor(7*Math.random())]);
    image.style.backgroundImage="url("+value+")";

}
function set_sunday_red()
{
    // others black
    for(var i=1;i<=31;i=i+1){
        var x=document.querySelectorAll(".day")[i-1];
                x.style.color="black";
                x.style.backgroundColor="azure";
        
    } 

    // all sundays red;
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
    for(var i=y;i<=31;i=i+7){
        var x=document.querySelectorAll(".day")[i-1];
        if(x!=="undefined")
            {
                x.style.color="red";
            }
    }
       
}

function set_events_color()
{
    for(var i = 0;i<events.length;i+=1)
    {
        var tdate,tmonth,tyear;
        tdate = events[i].getDate();
        tmonth = events[i].getMonth();
        tyear = events[i].getFullYear();
        if(tmonth === month && tyear === year)
        {
                var x=document.querySelectorAll(".day")[tdate-1];
                x.style.color="green";
                x.style.backgroundColor="orange";   
        }
    }
}

function create_calendar(){
    
    
    var temp = new Date(year,month,1);
    var day=temp.getDay();
    var x=document.querySelector(".day");
    var margin=String(day*52)+"px";
    x.style.marginLeft=margin;

    var complete_info=document.querySelector("#complete_info");
    var c1=document.querySelector("#c1");
    var c2=document.querySelector("#c2");
    help_month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    c1.innerHTML = help_month[month];
    c2.innerHTML = (year);

// else required as for next month they should be vissible
if(month === 1)
{   
    document.querySelectorAll(".day")[28].style.visibility="hidden";
    document.querySelectorAll(".day")[29].style.visibility="hidden";
    document.querySelectorAll(".day")[30].style.visibility="hidden";
}
else
{   
    document.querySelectorAll(".day")[28].style.visibility="visible";
    document.querySelectorAll(".day")[29].style.visibility="visible";
    document.querySelectorAll(".day")[30].style.visibility="visible";
}
//leap year
if((year%400)===0 ||((year%4)===0) && (year%100!==0))
{
     document.querySelectorAll(".day")[28].style.visibility="visible";
}
   //30day month
if((month=== 1) || (month=== 3) || (month===5) || (month===8) ||(month===10) ){
   document.querySelectorAll(".day")[30].style.visibility="hidden";
   }
else{
    document.querySelectorAll(".day")[30].style.visibility="visible";
}


    set_image();
    set_sunday_red();
    set_events_color();
//current day black with white text;
var d4=new Date();
var days=document.querySelector("#days");
    if(month === d4.getMonth() && year === d4.getFullYear()){
        days.children[date-1].style.color="green";
        days.children[date-1].style.backgroundColor="aquamarine";
    }
}
  //addevent
function create_event(tdate,type_event){

        
        var flag=-1;
        var t = new Date(year,month,tdate);
        for(var i = 0;i<events.length;i+=1)
        {
            if(events[i].getDate() === t.getDate() && events[i].getMonth() === t.getMonth() && events[i].getFullYear() === t.getFullYear())
            {
                flag = events[i];
                break;
            }

        }
        if(flag !== -1)
        {
            alert(flag);   
        }
        else{ 
            events.push(t);
            create_calendar();
        }
       
} 

//speech recognition
var microphone=document.querySelector(".microphone");
microphone.addEventListener("click",function(){
    var recognition= new(window.SpeechRecognition|| webkitSpeechRecognition);
   
    recognition.lang = 'en-US';
    recognition.start();
    microphone.classList.add("record");
    var operations={
        "and":"add",
        "1st":"1",
        "2nd":"2",
        "3rd":"3",
        "4th":"4",
        "5th":"5",
        "6th":"6",
        "7th":"7",
        "8th":"8",
        "9th":"9",
        "10th":"10",
        "11th":"11",
        "12th":"12",
        "13th":"13",
        "14th":"14",
        "15th":"15",
        "16th":"16",
        "17th":"17",
        "18h":"18",
        "19th":"19",
        "20th":"20",
        "21st":"21",
        "22nd":"22",
        "23rd":"23",
        "24th":"24",
        "25th":"25",
        "26th":"26",
        "27th":"27",
        "28th":"28",
        "29th":"29",
        "30th":"30",
        "31th":"31",
        
    }
    recognition.onresult=function(event){
        var x=event.results[0][0].transcript;
        microphone.classList.remove("record");
        for(property in operations)
                {
                   x= x.replace(property,operations[property]);
                }
        console.log(x);//prints transcript
        var arr=x.split(" ");
        var date_event,add_event=0,type_event=null;
        for(var i=0;i<arr.length;i++)
            {
                if(!isNaN(arr[i])){
                    date_event=Number(arr[i]);
                }
                console.log(date_event)
                create_event(date_event,null);
            }
   
        
    }
    
});


//for dark mode
function dark_mode_event(){
    var body=document.querySelector("body");
   var x=body.style.backgroundColor;
    if(x==="wheat" || x===""){    document.querySelector("#text").style.color="white";
        body.style.backgroundColor="black"
        document.querySelector("#complete_info").style.color="white";
                   }
    else{    
        document.querySelector("#text").style.color="black";
        body.style.backgroundColor="wheat";
        document.querySelector("#complete_info").style.color="black";
         }
}