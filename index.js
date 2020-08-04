//button presed...

var number_of_drum_button=document.querySelectorAll(".drum").length;
for (var i=0;i<number_of_drum_button;i++)
{


document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick()
{
   var buttonInnerHTML=this.innerHTML;
  makesound(buttonInnerHTML);
  animation(buttonInnerHTML);
   
});

}


//keys pressed

document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    animation(event.key);

})



 function makesound(key)
{
    switch (key) {
        case "w":
    var audio=new Audio('sounds/Tom-1.mp3');
    audio.play();
            break;
            case "a":
    var audio=new Audio('sounds/Tom-2.mp3');
    audio.play();
            break;
            case "s":
    var audio=new Audio('sounds/Tom-3.mp3');
    audio.play();
            break;
            case "d":
    var audio=new Audio('sounds/Tom-4.mp3');
    audio.play();
            break;
            case "j":
    var audio=new Audio('sounds/Snare.mp3');
    audio.play();
            break;
            case "k":
    var audio=new Audio('sounds/Crash.mp3');
    audio.play();
            break;
            case "l":
             var audio=new Audio('sounds/kick-bass.mp3');
             audio.play();
             break;
        default:console.log(buttonInnerHTML);    
    }
}


function animation(currentkey){

var activebutton=document.querySelector("."+currentkey);
activebutton.classList.add("pressed");

setTimeout(function(){
        activebutton.classList.remove("pressed");
},100) 

}