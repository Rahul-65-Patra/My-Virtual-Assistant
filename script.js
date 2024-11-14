let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');


function speak(text){
  let speech = new SpeechSynthesisUtterance(text);  // object
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "hi-IN";
  window.speechSynthesis.speak(speech);
}
  

function wishMe(){
  let day = new Date();
  let hours = day.getHours();
 // console.log(hours) // get current time
 if(hours >=0 && hours < 12){
  speak("Good Morning Sir");
 }
 else if(hours >= 12 && hours < 16){ 
  speak("Good Afternoon Sir");
 } 
 else{
  speak("Good Evening Sir");
 }
}
  
window.addEventListener('load',()=>{
  wishMe();
})      
 
// speak to convert key
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();   // create an object
recognition.onresult = (event)=>{
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  //console.log(event)
  takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
  recognition.start();
  btn.style.display="none";
  voice.style.display="block";
})

// function to take command and perform action accordingly when
function takeCommand(message){
  
  btn.style.display="flex";
  voice.style.display="none";
  console.log(message);

    if(message.includes("hello") || message.includes("hey")){
        speak("Hello Sir! How can I help you?");
       }
    else if (message.includes("who are you")) {
        speak("I am a virtual assistant created by Rahul Sir");
    } 
    else if (message.includes("what is your name")) {
        speak("My name is Jadoo, created by Rahul Sir");
    }                                                                          
    else if(message.includes("opening youtube")){
        speak("opening youtube...");
        window.open("https://www.youtube.com/","_blank");
     }
    else if(message.includes("opening google")){
        speak("opening google...");
        window.open("https://www.google.com/","_blank");
     }
    else if(message.includes("opening facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/","_blank");
     }
       else if(message.includes("opening instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com/","_blank");
     }
       else if(message.includes("opening flipkart")){
        speak("opening flipkart...");
        window.open("https://www.flipkart.com/","_blank");
     }
       else if(message.includes("opening amazon")){
        speak("opening amazon...");
        window.open("https://www.amazon.com/home","_blank");
     }  
     else if(message.includes("opening spotify")){
      speak("opening spotify...");
      window.open("https://open.spotify.com/home","_blank");
   }
       else if(message.includes("opening calculator")){
        speak("opening calculator...");
        window.open("https://www.calculator.com/");
        
     }
     else if (message.includes("opening whatsapp")) {   
      speak("opening WhatsApp...");
      window.open( "whatsapp://send?text=Hello");
  }  
       else if(message.includes("current time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
     }
       else if(message.includes("current date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date);
     }
       else{ 
        let findText = "this is what i found on internet regarding" + `${message.replace("Jadoo","") || message.replace('Jodoo','')}`
        speak(findText);
        window.open(`https://www.google.com/search?q=${message.replace('Jodoo','')}`,"_blank");
     }
}
