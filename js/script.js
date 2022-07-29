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
    let donutText = document.getElementsByClassName("donut-text");
    var chart1 = document.getElementById("chart1");
    var chart2 = document.getElementById("chart2");
    var chart3 = document.getElementById("chart3");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var btnPercent = document.getElementById("btn-percent");

    let c = (c3.getAttribute('r') * 2) * 3.14;

    let numbers = [Math.ceil(Math.random() * 1000), Math.ceil(Math.random() * 1000), Math.ceil(Math.random() * 1000)]

    let dashoffset = calcdashoffset(numbers, c)

    deals[0].innerHTML = numbers[0];
    deals[1].innerHTML = numbers[1];
    deals[2].innerHTML = numbers[2];

    let txtchart = 0;

    for (let i = 0; i < numbers.length; i++) txtchart += numbers[i]

    donutText[0].innerHTML = txtchart

    c1.setAttribute('stroke-dashoffset', dashoffset[0]);
    c2.setAttribute('stroke-dashoffset', dashoffset[1]);
    c3.setAttribute('stroke-dashoffset', dashoffset[2]);

    c1.setAttribute('stroke-dasharray', c);
    c2.setAttribute('stroke-dasharray', c);
    c3.setAttribute('stroke-dasharray', c);

    let rotate = calcrotate(numbers);

    chart1.style.transform = `rotate(${rotate[1]+rotate[2]}deg)`;
    chart2.style.transform = `rotate(${rotate[2]}deg)`;

    /** ============================== ROTATE ================================== */
    /** Consegui Caralho!!!!!!!!!!!!!!!  */
    function calcrotate(dashoffset) {
        let total = 0;

        for (let i = 0; i < dashoffset.length; i++) total += dashoffset[i]

        return dashoffset.map(value => {
            let a = (value * 100) / total //procentagem dashoffset
            let b = (a / 100) * 360;      //

            return b
        });
    }

    /** ============================== DASHOFFSET ================================== */
    function calcdashoffset(numbers, c) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) sum += numbers[i]

        return numbers.map(value => {
            let a = (value * 100) / sum
            let b = (a / 100) * c;

            return c - (b - 10)
        });
    }

});