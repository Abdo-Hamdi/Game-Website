var left = document.getElementById('left');
var right = document.getElementById('right');
var parent = document.querySelector('.innerSlider');
var slider = document.querySelector('.innerSlider');
var categories = document.querySelectorAll('.cate');
var pos = 0;
var max = categories.length * categories[0].offsetWidth - 3 * categories[0].offsetWidth;

right.addEventListener('click', rightMove)
left.addEventListener('click', leftMove)
setInterval(rightMove, 3500)

document.querySelector(".search .closer").addEventListener('click', searchFN)
document.querySelector("#searchBTN").addEventListener('click', searchFN)

function rightMove() {
    pos += 250;
    if (pos > max) {
        pos = 0;
    }
    slider.style.left = "-" + pos + "px";
}


function leftMove() {

    pos -= 249;

    if (pos <= 0) {
        pos = max;
    }
    slider.style.left = "-" + pos + "px";
}

function searchFN() {

    $(() => {

        $("#SearchBox").fadeToggle();

        if (!($("#SearchBox").css("display") == "none")) {
            $("#SearchBox").css("display", "flex")
        }

    })

}