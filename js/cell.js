define(function() {
    var Cell = function(position, state, value, table) {
        this.x = position.x;
        this.y = position.y;
        this.state = state || 1;
        this.value = value || '';
        this.table = table;
    }

    Cell.State = {
        Invalid: 0,
        Empty: 1,
        Occupied: 2
    }

    Cell.prototype.draw = function(table) {
        var ctx = table.ctx;
    };

    return Cell;
});