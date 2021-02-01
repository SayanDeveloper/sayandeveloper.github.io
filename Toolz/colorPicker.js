 // Simple example, see optional options for more configuration.
 const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: '#20ABB9',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            save: true
        }
    }
});

pickr.on('change', (color, instance) => {
    var total = document.getElementById('total');
    var rgbaOut = document.getElementById('rgbaOut');
    var hex = document.getElementById("hexVal");
    var autoChng = document.querySelectorAll('.pickr-container::before');
    const rgbaColor = color.toRGBA().toString(2);
    console.log(rgbaColor);
    total.style.background = rgbaColor;
    autoChng.background = rgbaColor;
    rgbaOut.innerHTML = rgbaColor;
    const hexa = color.toHEXA();
    hex.innerText = hexa;
})

// var input = document.getElementById("input");
        // var hex = document.getElementById("hexVal");
        // var red = document.getElementById('red');
        // var total = document.getElementById('total');
        // var blue = document.getElementById('blue');
        // var green = document.getElementById('green');
        // var box = document.getElementById('box');
        // input.onchange = function(e) {
        //     hex.innerHTML = e.target.value;
        //     const r = parseInt(e.target.value.substr(1,2), 16);
        //     const g = parseInt(e.target.value.substr(3,2), 16);
        //     const b = parseInt(e.target.value.substr(5,2), 16);
        //     red.innerHTML = r;
        //     green.innerHTML = g;
        //     blue.innerHTML = b;
        //     total.style.background = "rgb(" + r + ", " + g + "," + b + ")";
        // }