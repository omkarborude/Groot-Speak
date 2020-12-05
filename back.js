// get all in
var txtinput = document.querySelector("#Textinput");
var button = document.querySelector("#BTN");
var out = document.querySelector("#output");

//define serverurl
var serverURL = "https://api.funtranslations.com/translate/groot.json";

//function gettranlsated url
function getTranslatedURL(input) {
    return serverURL + "?" + "text=" + input
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
    .then(response => response.json())
    .then(json => {
        var tranlsatedText = json.contents.translated;
        out.innerText = tranlsatedText;
    })
    .catch(errorHandler)
};
    button.addEventListener("click",clickHandler);
