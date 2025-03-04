let name = 'yvlpasir'.split('');
let nameElement = document.querySelector('.name');
for(let i = 1; i < name.length+1; i++) {
    setTimeout(function () {
        nameElement.textContent += name[i-1];
    }, 500 * i);
}

let played = false;
var audio = new Audio('MOJO JOJO.mp3');
let icon = document.querySelector('.fa-play-circle');

function play() {
    if(played) {
        audio.pause()
        played = false;
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    } else {
        audio.play()
        played = true;
        icon.classList.remove('fa-play-circle');
        icon.classList.add('fa-pause-circle');
    }
}

function test() {
    let inputBox = document.querySelector(".input-box");
    let inputText = inputBox.textContent.trim();

    if (inputText !== "") {
        fetch("https://deadpan-blushing-steam.glitch.me/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: inputText })
        })
        .then((res) => {
            if(res.status === 200){
                window.location.href = "https://deadpan-blushing-steam.glitch.me/sent";
            } else {
                window.location.href = "https://deadpan-blushing-steam.glitch.me/error";
            }
        });
        inputBox.textContent = "";
        inputBox.focus();
        document.execCommand("insertText", false, "");
    }
}

document.querySelector(".input-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        test();
    }
});
