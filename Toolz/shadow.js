const xMove = document.getElementById('x-move'); 
        const yMove = document.getElementById('y-move'); 
        const blur = document.getElementById('blur'); 
        const xVal = document.getElementById('x-val'); 
        const yVal = document.getElementById('y-val'); 
        const bVal = document.getElementById('b-val'); 
        const preview = document.getElementById('previewBox');
        const codeX = document.getElementById("codeX");
        const codeY = document.getElementById("codeY");
        const codeB = document.getElementById("codeB");

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
            preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
            codeX.innerHTML = xVal.value;
        };
        yVal.onchange = function(e) {
            yMove.innerHTML = e.target.value;
            codeY.innerHTML = e.target.value
            preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
        };
        bVal.onchange = function(e) {
            blur.innerHTML = e.target.value;
            codeB.innerHTML = e.target.value;
            preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
        };

        xVal.onmousemove = updateX;
        yVal.onmousemove = updateY;
        bVal.onmousemove = updateB;

        function updateX(e) {
            if (clicked == true) {
                xMove.innerHTML = e.target.value;
                codeX.innerHTML = e.target.value;
                preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
            }
        }
        function updateY(e) {
            if (clicked == true) {
                yMove.innerHTML = e.target.value;
                codeY.innerHTML = e.target.value;
                preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
            }
        }
        function updateB(e) {
            if (clicked == true) {
                blur.innerHTML = e.target.value;
                codeB.innerHTML = e.target.value;
                preview.style.boxShadow = xVal.value + "px " + yVal.value + "px " + bVal.value + "px black";
            }
        }