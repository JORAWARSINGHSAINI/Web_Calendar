var time = document.querySelector("#time");
 var events=new Array(31);
for(var i=0;i<31;i++)
    events[i]="";
var image_arr=["https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://cdn.sharechat.com/beautifulnature_882bb8d0-a2c6-4bf1-9c4e-e9e0fec6fa8e-34f3619d-9efe-42ee-9f08-c9a780fb7451_cmprsd_40.jpg","https://cdnaws.sharechat.com/1534585837859_284_compressed_40.jpg","https://cdn-ak.sharechat.com/%EF%B8%8Fnaturebeauty%EF%B8%8F_84857dea-ce01-4094-a326-e7f6514c152e-70d6f1c2-c3e4-41ef-a628-5ae1d72c33d7_cmprsd_40.jpg","https://cdnaws.sharechat.com/73316340-7264-491f-8558-07365de90fab-28ea6ae2-adbe-4731-82e4-e16bdf404953_compressed_40.jpg"];
var d1 = new Date();
var curr_day=d1.getDate();
var month=d1.getMonth(); //curr month;
var year=d1.getFullYear();
var after=document.querySelector("#after");
    create_calendar();
after.addEventListener("click",function() {
    month+=1;
    d1=new Date(year,month,1);
    create_calendar();
});
var before=document.querySelector("#before");
before.addEventListener("click",function() {
    month-=1;
    d1=new Date(year,month,1);
    create_calendar();
});

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

function create_calendar(){
    //set image from array
    var image=document.querySelector("#photo");
    var value=String(image_arr[Math.floor(4*Math.random())]);
    console.log(value);
  image.style.backgroundImage="url("+value+")";
var d2=new Date(year,month,1);
var day=d2.getDay();
var x=document.querySelector(".day");
var margin=String(day*52)+"px";
x.style.marginLeft=margin;
        document.querySelectorAll(".day")[28].style.visibility="visible";
        document.querySelectorAll(".day")[29].style.visibility="visible";
        document.querySelectorAll(".day")[30].style.visibility="visible";
//month of feb
if(month===1)
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
// mark sundays red and other black;
for(var i=1;i<=31;i=i+1){
    var x=document.querySelectorAll(".day")[i-1];
            x.style.color="black";
            x.style.backgroundColor="azure";
        if(events[i-1]!=="")
            x.style.backgroundColor="darkorange";
}    
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
var d4=new Date();
var days=document.querySelector("#days");
    if(month===d4.getMonth()){
days.children[curr_day-1].style.color="white";
days.children[curr_day-1].style.backgroundColor="aquamarine";
    }
}
   
//addevent
function create_event(i,type_event){
    document.querySelectorAll(".day")[i-1].classList.add("event");
     
    console.log(events);
    if( type_event!=null){
        events[i-1]=type_event;
        document.querySelectorAll(".day")[i-1].style.backgroundColor="darkorange";
    }
    else{
    if(events[i-1]!==null && events[i-1]!=="")
        alert(events[i-1]);
    else{
        events[i-1]=prompt("Enter event name");
        if(events[i-1]!=="")
        document.querySelectorAll(".day")[i-1].style.backgroundColor="darkorange";
    }
        
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
        console.log(x);//prints transcript
        for(property in operations)
                {
                   x= x.replace(property,operations[property]);
                }
        console.log(x);//prints transcript
        var arr=x.split(" ");
        var date_event,add_event=0,type_event=null;
        for(var i=0;i<arr.length;i++)
            {
                if(arr[i]=="add"){
                    add_event=1;
                }
                if(!isNaN(arr[i])){
                    date_event=Number(arr[i]);
                }
                if(arr[i]=="birthday" || arr[i]=="meeting" ){
                   type_event=arr[i];
                   }
                
            }
        event_to_add(add_event,date_event,type_event)
        console.log(add_event);
        microphone.classList.remove("record");
    }
    
});

function event_to_add(add_event,date_event,type_event)
{
    if(add_event==1)
        {
            create_event(date_event,type_event);
        }
//    else{
//        delete_event(date_event);
//    }
}

function dark_mode_event(){
    var body=document.querySelector("body");
   var x=body.style.backgroundColor;
    if(x==="azure" || x===""){    document.querySelector("#text").style.color="white";
        body.style.backgroundColor="#1a1a1a"
                   }
    else{    document.querySelector("#text").style.color="black";
        body.style.backgroundColor="azure";
                   }
}