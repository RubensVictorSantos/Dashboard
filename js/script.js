// Quando carregar a página 
$(document).ready(function () {
    // Função 'onClick' do btn_carregar
    $("#btn_carregar").on("click", function (e) {

        /* each vai passar por todas as divs com a 
        class progress-bar__bar e alterar o css.*/
        $('.progress-bar__bar').each(function () {
            $(this).css('transform', 'translateX(' + Math.random() * 100 + '%)');
            $(this).css('-webkit-transform', 'translateX(' + Math.random() * 100 + '%)');
        });
    });

    let deals = document.getElementsByClassName("deals-status");
    var chart1 = document.getElementById("chart1");
    var chart2 = document.getElementById("chart2");
    var chart3 = document.getElementById("chart3");
    var c3 = document.getElementById("c3");
    var c2 = document.getElementById("c2");
    var c1 = document.getElementById("c1");

    let c = (c3.getAttribute('r') * 2) * 3.14;

    let numbers = [Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)]
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let dashoffset = numbers.map(value => {
        let a = (value * 100) / sum
        let t = (a / 100) * c;

        return c - (t-10)
    });

    console.log(dashoffset);

    let t = 0;

    for (let i = 0; i < dashoffset.length; i++) {
        t += dashoffset[i];
    }

    console.log(t);

    deals[0].innerHTML = `${Math.floor(dashoffset[0])}`;
    deals[1].innerHTML = `${Math.floor(dashoffset[1])}`;
    deals[2].innerHTML = `${Math.floor(dashoffset[2])}`;

    c1.setAttribute('stroke-dashoffset', dashoffset[0])
    c2.setAttribute('stroke-dashoffset', dashoffset[1])
    c3.setAttribute('stroke-dashoffset', dashoffset[2])

    c1.setAttribute('stroke-dasharray', c)
    c2.setAttribute('stroke-dasharray', c)
    c3.setAttribute('stroke-dasharray', c)

    let rotate = dashoffset.map(value => (value * 360) / c)

    // console.log(rotate)

    // chart2.style.transform = `rotate(${-rotate[0]}deg)`
    // chart3.style.transform = `rotate(${-rotate[1]}deg)`

    // console.log(numbers+`\n`+dashoffset+`\n`+rotate);

});