define(['table', 'jquery'], function(Table, $) {
    var Game = function() {
        this.container = undefined;
        this.table = undefined;

        this.selected = undefined;
    }

    Game.prototype.start = function() {
        var cells = undefined;

        if(localStorage.cells)
            cells = JSON.parse(localStorage.cells);
        this.table = new Table(cells);
        this.table.insert(this.container);

        var _this = this;

        $(".button#resetButton").click(function() {
            _this.reset();
        });

        // debugging
        window.t = this.table;
        window.g = this;
    };

    Game.prototype.reset = function() {
        localStorage.removeItem("cells");
        this.table.reset();
    }

    Game.prototype.saveState = function() {
        var cells = [];
        for(var i = 0; i < this.table.cells.length; ++i) {
            var serialized = this.table.cells[i].serialize();
            cells.push(serialized);
        }
        localStorage.cells = JSON.stringify(cells);
    }

    return Game;
});