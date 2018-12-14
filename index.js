'use strict';

(function () {
    var app = null;
    var logo = null;
    var STEP = 2;
    var LOGO_WIDTH = 500;
    var LOGO_HEIGHT = 310;
    var xP = 1;
    var yP = 1;
    var logoX = null;
    var logoY = null;

    window.onload = function () {
        console.log("Window is ready");
        app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight
        });
        app.renderer.autoResize = true;
        onCreated();
        onResume();
    };

    window.onresize = function () {
        console.log("Window is resized");
        app.renderer.resize(window.innerWidth, window.innerHeight);
    };

    function onCreated() {
        console.log("On created");
        document.getElementById('canvas-wrapper')
            .appendChild(app.view);
        logo = PIXI.Sprite.fromImage('assets/logo.png');
        logo.anchor.set(0.5);
        logo.tint = randomColor();
        logo.x = window.innerWidth * Math.random();
        logo.y = window.innerHeight * Math.random();
        app.stage.addChild(logo);
        app.ticker.add(onRender);
    }

    function onResume() {
        var width = 150;
        var height = LOGO_HEIGHT / LOGO_WIDTH * width;
        logo.width = width;
        logo.height = height;
    }

    function onRender() {
        logo.x += STEP * xP;
        logo.y += STEP * yP;

        if (logo.x + logo.width / 2 >= window.innerWidth) {
            xP = -1;
            logo.tint = randomColor();
        }
        if (logo.x  <= logo.width / 2) {
            xP = 1;
            logo.tint = randomColor();
        }
        if (logo.y + logo.height / 2 >= window.innerHeight) {
            yP = -1;
            logo.tint = randomColor();
        }
        if (logo.y  <= logo.height / 2) {
            yP = 1;
            logo.tint = randomColor();
        }
    }

    function randomColor() {
        return Math.random() * 0xffffff;
    }
})();

