define(["underscore", "util/raf"], function(_, requestAnimationFrame) {
    var GameManager = function(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    GameManager.prototype.mainLoop = function() {
        requestAnimationFrame(this.mainLoop);

        
    };

    GameManager.prototype.start = function() {
        
    };

    return GameManager;
});