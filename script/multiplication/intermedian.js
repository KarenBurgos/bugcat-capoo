var container = document.getElementById("multiplication-generation")
var form = document.getElementById("form")
var containerImg = document.getElementById("container-img")

var num1 = document.createElement("h1")
var times = document.createElement("h1")
var num2 = document.createElement("h1")

window.onload = (event) => {
    generate()
};

function generate() {


    num1.innerText = Math.floor(Math.random() * 100);
    num1.id = "num1"

    times.innerText = "x"
    num2.innerText = Math.floor(Math.random() * 100);
    num2.id = "num2"

    container.appendChild(num1)
    container.appendChild(times)
    container.appendChild(num2)
}

var h2 = document.createElement("h2")

form.onsubmit = (e) => {
    e.preventDefault();
    var result = document.getElementById("container-result")
    var image = document.createElement("img")

    const audiocorrect = new Audio("./correct.mp3");
    const audioerror = new Audio("./error.mp3");

    var button = document.createElement("button")
    var num1 = document.getElementById("num1").textContent
    var num2 = document.getElementById("num2").textContent
    var input = document.getElementById("result")
    var resultado = num1 * num2

    if (resultado == input.value) {
        h2.innerText = "Correcto!"
        button.innerText = "Siguiente"

        result.appendChild(h2)
        result.appendChild(button)

        audiocorrect.play();

        button.onclick = (event) => {
            generate()
            input.value = ""
            button.remove()
            h2.remove()
        }

    }
    else {
        h2.innerText = "Incorrecto!"
        audioerror.play()

        document.getElementById("img").remove()
        var n = Math.floor(Math.random() * 5);

        switch (n) {
            case 1:
                image.src = "../img-gif/1.gif"
                image.id="img"
                break;
            case 2:
                image.src = "../img-gif/2.gif"
                image.id="img"
                break;
            case 3:
                image.src = "../img-gif/3.gif"
                image.id="img"
                break;
            case 4:
                image.src = "../img-gif/4.gif"
                image.id="img"
                break;

            default:
                image.src = "../img-gif/4.gif"
                image.id="img"
                break;
        }
        console.log(image)
        document.getElementById("container-img").appendChild(image)        

        result.appendChild(h2)
    }
}
