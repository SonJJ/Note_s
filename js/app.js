
console.log('my-note app.js');


var newnote = document.getElementsByClassName('btn-newnote');
var savenote = document.getElementsByClassName('btn-savenote');
var about = document.getElementsByClassName('btn-about');
var fullscreen = document.getElementsByClassName('btn-fullscreen');

var memoarea = document.getElementById('memo');
var layer = document.getElementById('layer');
var filedown = document.getElementsByClassName('btn-filedown');
var screen = document.getElementById('screen');

//최초 진입
if(localStorage.length !== 0){
    for(i=0; i<localStorage.length; i++){
        memoarea.innerHTML+=localStorage.key(i);
    }
}

console.log(memoarea.value);

//노트 새로
newnote[0].addEventListener('click',function (event) {
    console.log(memoarea.value);
    memoarea.value ='';
    localStorage.clear();
    console.log(memoarea.value);
})

//노트 저장
savenote[0].addEventListener('click', function (event) {
    localStorage.clear();
    localStorage.setItem(memoarea.value, 'textarea');
    console.log(localStorage);
});

//내용 파일로 저장
filedown[0].addEventListener('click',function (event) {
    var file = new File([memoarea.value], "My_note.txt", {type: "text/plain;charset=utf-8"});
    saveAs(file);
});

//about
about[0].addEventListener('click', function (event) {
    if(layer.style.display !== 'inline'){
        layer.style.display='inline';
    }
    else{
        layer.style.display='none';
    }

    console.log();
});

fullscreen[0].addEventListener('click', function (event) {

    if(event.srcElement.requestFullScreen) {
        screen.requestFullScreen();
    }
    else if(event.srcElement.webkitRequestFullScreen) {
        screen.webkitRequestFullScreen();
    }
    else if(event.srcElement.mozRequestFullScreen) {
        screen.mozRequestFullScreen();
    }
    else if (event.srcElement.msRequestFullScreen) {
        screen.msRequestFullScreen(); // IE
    }
    console.log(screen.offsetWidth);
});