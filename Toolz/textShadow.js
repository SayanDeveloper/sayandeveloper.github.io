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


        const xMove = document.getElementById('x-move'); 
        const yMove = document.getElementById('y-move'); 
        const blur = document.getElementById('blur'); 
        const xVal = document.getElementById('x-val'); 
        const yVal = document.getElementById('y-val'); 
        const bVal = document.getElementById('b-val'); 
        const chX = document.getElementById('chX'); 
        const chY = document.getElementById('chY'); 
        const chB = document.getElementById('chB'); 
        const preview = document.getElementById('previewBox');
        const demo = document.getElementById('code');
        const colorT = document.getElementById('colorT');

        pickr.on('change', (color, instance) => {
            var total = document.getElementById('total');
            var rgbaOut = document.getElementById('rgbaOut');
            var autoChng = document.querySelectorAll('.pickr-container::before');
            const rgbaColor = color.toRGBA().toString(2);
            const hexa = color.toHEXA();
            preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + rgbaColor;
            colorT.innerText = hexa;
        })


        var clicked = false;

        xVal.onmousedown = function() {
            clicked = true;
        };
        yVal.onmousedown = function() {
            clicked = true
        };
        bVal.onmousedown = function() {
            clicked = true
        };

        xVal.onmouseup = function() {
            clicked = false;
        };
        yVal.onmouseup = function() {
            clicked = false
        };
        bVal.onmouseup = function() {
            clicked = false
        };

        xVal.onchange = function(e) {
            xMove.innerHTML = e.target.value;
            preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
            chX.innerHTML = e.target.value;
        };
        yVal.onchange = function(e) {
            yMove.innerHTML = e.target.value;
            preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
            chY.innerHTML = e.target.value;
        };
        bVal.onchange = function(e) {
            blur.innerHTML = e.target.value;
            preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
            chB.innerHTML = e.target.value;
        };

        xVal.onmousemove = updateX;
        yVal.onmousemove = updateY;
        bVal.onmousemove = updateB;

        function updateX(e) {
            if (clicked == true) {
                xMove.innerHTML = e.target.value;
                preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
                chX.innerHTML = e.target.value;
            }
        }
        function updateY(e) {
            if (clicked == true) {
                yMove.innerHTML = e.target.value;
                preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
                chY.innerHTML = e.target.value;
            }
        }
        function updateB(e) {
            if (clicked == true) {
                blur.innerHTML = e.target.value;
                preview.style.textShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px " + colorT.innerText;
                chB.innerHTML = e.target.value;
            }
        }
        