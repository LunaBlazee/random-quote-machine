const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const facebookBtn = document.querySelector(".facebook");



//random qoute function
function randomQuote(){
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote..."
  // fetching random quotes/data from the API and parsing it into
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
      //check the data by write here console.log(result);

      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });

}

soundBtn.addEventListener("click", ()=>{
   // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);// speak method of speechSynthesis speaks the utterance
})

copyBtn.addEventListener("click", ()=>{
  // copying the quote text on copyBtn click
  // writeText() property writes the specified text string to the system slipboard
  navigator.clipboard.writeText(quoteText.innerText);
  console.log(quoteText.innerText);
  copyBtn.classList.toggle('copied');
});

facebookBtn.addEventListener("click", ()=>{
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u==${quoteText.innerText}`;
  window.open(facebookUrl, "_blank"); //opening a new facebook tab by passing quote in the Url 
});

quoteBtn.addEventListener("click", randomQuote);
