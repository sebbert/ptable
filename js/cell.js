define(['jquery', 'elements'], function($, elements) {
    var createPositionClassString = function(x, y) {
        return "p" + (x + 1) + "x" + (y + 1);
    }

    /**
     * Represents an element on the game field.
     *
     * @constructor
     * @param {object} position An object with the following format:
     *      {
     *          x: The X position of the element.
     *          y: The Y position of the element.
     *      }
     * @param value {string} The value of the element
     */
    var Cell = function(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value || '';
        this.correct = false;

        var positionClassString = createPositionClassString(this.x, this.y);

        this.domElement = $("<span></span>")
                            .addClass("cell")
                            .addClass(positionClassString)
                            .text(value);

        var _this = this;

        this.domElement.click(function() {
            if(_this.correct) {
                return;
            }

            if(Game.selected) {
                if(_this == Game.selected) {
                    _this.select(false);
                    Game.selected = undefined;
                    return;
                }

                Game.selected.select(false);
                _this.swap(Game.selected);

                _this.validate();
                Game.selected.validate();
                Game.selected = undefined;

                Game.saveState();
            }

            else {
                _this.select(true);
                Game.selected = _this;
            }
        })
    }

    Cell.prototype.insert = function(container) {
        $(container).append(this.domElement);
    };

    Cell.prototype.move = function(x, y) {
        var previousString = createPositionClassString(this.x, this.y);
        this.x = x;
        this.y = y;

        var newString = createPositionClassString(x, y);
        $(this.domElement).removeClass(previousString).addClass(newString);

    };

    Cell.prototype.select = function(select) {
        if(select) {
            this.domElement.addClass("selected");
        }

        else {
            this.domElement.removeClass("selected");
        }
    };

    Cell.prototype.swap = function(cell) {
        var x = cell.x;
        var y = cell.y;
        cell.move(this.x, this.y);
        this.move(x, y);
    };

    Cell.prototype.validate = function() {
        if(elements.elementAtPoint(this.x, this.y) == this.value) {
            this.correct = true;
            this.domElement.addClass("correct");
            return true;
        }

        return false;
    }

    Cell.prototype.serialize = function() {
        return {
            x: this.x,
            y: this.y,
            value: this.value,
            correct: this.correct
        };
    }

    Cell.prototype.reset = function(shuffled) {
        for(var i = 0; i < shuffled.length; i++) {
            if(this.value == shuffled[i]) {
                var coords = elements.coordsAtIndex(i);
                this.select(false);
                this.correct = false;
                this.domElement.removeClass("correct");

                this.move(coords.x, coords.y);
                return;
            }
        }
    }

    Cell.deserialize = function(serialized) {
        var cell = new Cell(serialized.x, serialized.y, serialized.value);
        cell.correct = serialized.correct;
        cell.validate();
        return cell;
    }

    return Cell;
});