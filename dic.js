const result = document.getElementById('result');
const btn = document.querySelector('#Search');
const word = document.getElementById('word');
const sound = document.getElementById('sound');
const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
btn.addEventListener('click', ()=>{
    const wordtext = document.getElementById('wordtext').value;
    console.log(wordtext);
    fetch(`${URL}${wordtext}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `<div id="word">
                <p>${data[0].word}</p>
                <button onclick = "playsound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div id="word-grammer">
                <p>${data[0].meanings[0].partOfSpeech}</p>
            </div>
            <div id="word-meaning">
                <p>${data[0].meanings[0].definitions[0].definition}</p>
            </div>
            <div id="word-example">
                <p> ${data[0].meanings[0].definitions[0].example}</p>
            </div>
            `;  
            sound.setAttribute('src' , `${data[0].phonetics[0].audio}`
            ) 
            console.log(sound);
    })
    .catch(() =>{
        result.innerHTML = `<h3>Couldn't find the Word...</h3>`
    })
})
function playsound(){
    sound.play();
    
}