define(['underscore', 'cell', 'elements', 'util/util'], function(_, Cell, elements, Util) {
    var TABLE_COLUMNS   = 18,
        TABLE_ROWS      = 8;

    var Table = function(cells) {
        this.cells = [];

        if(cells) {
            for(var i = 0; i < cells.length; ++i) {
                var cell = Cell.deserialize(cells[i]);
                this.cells.push(cell);
            }
        }

        else {
            var shuffled = Util.shuffleElements();

            for(var i = 0; i < elements.length; ++i) {
                // Only insert an element if there's supposed to be an element here...
                var element = shuffled[i];
                if(!element) continue;

                // Convert index to 2d coordinates
                var x = (i % elements.columns);
                var y = Math.floor(i / elements.columns);

                var cell = new Cell(x, y, element);
                this.cells.push(cell);
            }
        }
    };

    Table.prototype.insert = function(container) {
        this.container = container;
        for(var i = 0; i < this.cells.length; ++i) {
            this.cells[i].insert(container);
        }
    };

    Table.prototype.validate = function() {
        for(var i = 0; i < this.cells.length; ++i) {
            var cell = this.cells[i];
            cell.validate();
        }
    };

    Table.prototype.reset = function() {
        var shuffled = Util.shuffleElements();
        console.log(window._s = shuffled);

        for(var i = 0; i < this.cells.length; ++i) {
            this.cells[i].reset(shuffled);
        }
    }

    return Table;
});