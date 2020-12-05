// get all
var txtinput = document.querySelector("#Textinput");
var button = document.querySelector("#BTN");
var out = document.querySelector("#output");

//define serverurl
var serverURL = "https://api.funtranslations.com/translate/groot.json";

//function gettranlsated url
function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text
}

//function errorHandler
function errorHandler(error) {
    console.log("error occured",error);
    alert("Server is down , Try again Later !!");
}

//function clickHandler
function clickHandler(){
    var textinput = txtinput.value;
    
    
    //fetch gettranslationURL
    fetch(getTranslatedURL(textinput))
    .then(response => respone.json())
    .then(json => {
        var tranlsatedText = json.contents.translated;
        out.innerText = tranlsatedText;
    })
    .catch(errorHandler)
};
    button.addEventListener("click",clickHandler);
