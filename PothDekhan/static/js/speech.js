const searchForm = document.querySelector("#search-form");
const searchForm1 = document.querySelector("#search-form1");
const searchFormInput = searchForm.querySelector("input");
const searchFormInput1 = searchForm1.querySelector("input");
var name = startLocation;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 


if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  const recognition1 = new SpeechRecognition();


  const micBtn = searchForm.querySelector("button");
  const micBtn1 = searchForm1.querySelector("button");

  const micIcon = micBtn.firstElementChild;
  const micIcon1 = micBtn1.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { 
      recognition.start();
    }
    else {
      recognition.stop();
    }
  }

  micBtn1.addEventListener("click", micBtnClick1);
  function micBtnClick1() {
    if(micIcon1.classList.contains("fa-microphone")) { 
      recognition1.start();
    }
    else {
      recognition1.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition);
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition1.addEventListener("start", startSpeechRecognition1);
  function startSpeechRecognition1() {
    micIcon1.classList.remove("fa-microphone");
    micIcon1.classList.add("fa-microphone-slash");
    searchFormInput1.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition);
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition1.addEventListener("end", endSpeechRecognition1);
  function endSpeechRecognition1() {
    micIcon1.classList.remove("fa-microphone-slash");
    micIcon1.classList.add("fa-microphone");
    searchFormInput1.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition);
  recognition1.addEventListener("result", resultOfSpeechRecognition1);
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
     searchFormInput.value = transcript;
     searchFormInput.focus();
     setTimeout(() => {
       searchForm.submit();
     }, 500);
  }
}
else {
  console.log("Your Browser does not support speech Recognition");
}

function resultOfSpeechRecognition1(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  
   searchFormInput1.value = transcript;
   searchFormInput1.focus();
   setTimeout(() => {
     searchForm1.submit();
   }, 500);
   document.getElementById('dq').placeholder = name;
  }

