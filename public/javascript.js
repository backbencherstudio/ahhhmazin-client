
fetch("/get-count")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('number').innerHTML = data;
    });

function clickOnOne() {
    document.getElementById('pic2').style.display = 'block';
    document.body.style.backgroundColor = "#ff1f79";
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('audio1').play();
    document.querySelector('.colorChange1').style.stroke = "#ff1f79";

    document.querySelectorAll('.colorChange2').forEach(el => {
        el.style.fill = "#ff1f79";
    });

    fetch("/increment", { method: "POST" })
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('number').innerHTML = data;
        });
}

function clickOnTwo() {
    document.getElementById('pic2').style.display = 'none';
    document.body.style.backgroundColor = "#28a1ff";
    document.getElementById('pic3').style.display = 'block';
    document.getElementById('audio2').play();
    document.querySelector('.colorChange1').style.stroke = "#28a1ff";

    document.querySelectorAll('.colorChange2').forEach(el => {
        el.style.fill = "#28a1ff";
    });
    fetch("/increment", { method: "POST" })
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('number').innerHTML = data;
        });
}

function clickOnThree() {
    document.getElementById('pic3').style.display = 'none';
    document.body.style.backgroundColor = "#00ffa2";
    document.getElementById('pic1').style.display = 'block';
    document.getElementById('audio3').play();
    document.querySelector('.colorChange1').style.stroke = "#00ffa2";

    document.querySelectorAll('.colorChange2').forEach(el => {
        el.style.fill = "#00ffa2";
    });

    fetch("/increment", { method: "POST" })
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('number').innerHTML = data;
        });
    console.log("click3");
}

function numberChange() {

    $.ajax({
        url: "counter.php", success: function (newNumber) {
            if (Number(newNumber) > 0) {
                document.getElementById('number').innerHTML = newNumber
            }


        }
    })


}

var outide = 1;



function dice(sides) {

    var number = Math.ceil(Math.random() * sides);

    return number;

}



function say(words) {

    var random_dice_number = dice(100);

    return (words + ' ' + random_dice_number);

}


function showSupercut() {

    document.getElementById('pic1').style.opacity = 0;
    document.getElementById('pic2').style.opacity = 0;
    document.getElementById('pic3').style.opacity = 0;
    document.getElementById('number').style.opacity = 0;
    document.getElementById('supercut').style.display = 'block';

}




function hideSupercut() {

    document.getElementById('pic1').style.opacity = 1;
    document.getElementById('pic2').style.opacity = 1;
    document.getElementById('pic3').style.opacity = 1;
    document.getElementById('number').style.opacity = 1;
    document.getElementById('supercut').style.display = 'none';
    stopVideo()


}

function stopVideo() {
    $("#vid")[0].contentWindow.postMessage('{"event":"command", "func":"pauseVideo","args":""}', '*');

}

/*


function pauseVideo (state) 
{


    var div = document.getElementById("supercut");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo';
    iframe.postMessage(' {"event": "command", "func":" ' + func + '","args":""}', '*');



}

*/








