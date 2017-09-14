function highlightItem(element) {
    element.style.fontStyle = "italic";
    element.style.backgroundColor="lightblue";

}

function resetToIntailStyle(element){
    element.style.fontStyle = "normal";
    element.style.backgroundColor="white";
}

function changeText(text){
    var elm = document.getElementById("link1");
    elm.innerHTML = text;
}

function cc(t){
    var e = document.getElementById("placeForm");
    e.innerHTML = t;
}

/*function choosePlace(text){
    var elmfrom = document.getElementById("fromCity");
    var elmto = document.getElementById("toCity");
    if(text == 'Bangkok'){
        elmfrom.value = 'Thailand'
        
    }
    else if(text == 'Paris'){
        elmto.value = 'Thai';
        
    }
}
*/
function setList(text){
    var elm = document.getElementById("fromCity");
    
}

function ShowList(){
    var li = document.getElementById("fromCity").value;
    if(li == "Bangkok"){
        document.getElementsByTagName("option")[0].innerHTML = "Donmaung";
        document.getElementsByTagName("option")[1].innerHTML = "Suwannaphoom";
    }
}
function ShowListParis(){
    var li2 = document.getElementById("toCity").value;
    if(li2 == "Paris"){
        document.getElementsByTagName("option")[2].innerHTML = "CDG";
    }
}