
var a = document.querySelectorAll("button")

for(i=0;i<a.length;i++)
{
    a[i].addEventListener("click",function (){
        var buttonClicked = this.innerHTML;
        console.log(buttonClicked);
        makesound(buttonClicked);
        buttonAnima(buttonClicked);
    });
}

document.addEventListener("keydown",function (event) {
    var a = event.key;
    console.log(a);
    makesound(a);
    buttonAnima(a);
});


function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break;
        case "s":
                var audio = new Audio('./sounds/snare.mp3')
                audio.play()
                break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break; 
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break; 
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break; 
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break;        
        default:
            console.log("hi")
            break;
    } 
}

function buttonAnima(currentKey) {
    var j = document.querySelector("."+currentKey);
    j.classList.add("pressed");
    setTimeout(() => {
        j.classList.remove("pressed")
    }, 100);
}

