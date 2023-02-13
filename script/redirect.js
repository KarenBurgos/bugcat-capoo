var operation = document.getElementsByClassName("operation")
var difficultLevel = document.getElementsByClassName("difficult-level")

for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", redirect)
}

for (let i = 0; i < difficultLevel.length; i++) {
    difficultLevel[i].addEventListener("click", redirect)
}


function redirect(e) {
    var item = e.target

    switch (item.id) {
        case 'add':
            window.location.href = "../pages/difficultyadd.html"
            break;
        case 'less':
            window.location.href = "../pages/difficultyless.html"
            break;
        case 'multiplication':
            window.location.href = "../pages/difficultymultiplication.html"
            break;
        case 'division':
            window.location.href = "../pages/difficultydivision.html"
            break;
        case 'easy-multiplication':
            window.location.href = "../pages/multiplication/easy.html"
            break;
            case 'intermidean-multiplication':
            window.location.href = "../pages/multiplication/intermedian.html"
            break;
            case 'difficult-multiplication':
            window.location.href = "../pages/multiplication/difficult.html"
            break;
            
        default:
            break;
    }
}