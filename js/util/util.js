define(['underscore', 'elements'], function(_, elements) {
    var Util = {};

    Util.map = function(n, a, b, c, d) {
        return (n-a) / (b-a) * (d-c) + c;
    }

    Util.shuffleElements = function() {
        var pureElems = _.compact(elements);

        // Use the Knuth shuffle to make a set of elements in completely random order.
        for(var i = pureElems.length - 1; i >= 0; --i) {
            var rand = Math.floor(Math.random() * i);
            var tmp = pureElems[rand];
            pureElems[rand] = pureElems[i];
            pureElems[i] = tmp;
        }

        var result = [];
        var pureCounter = 0;

        for(var i = 0; i < elements.length; ++i) {
            if(elements[i] == 0) {
                result.push(0);
                continue;
            }

            result.push(pureElems[pureCounter]);
            pureCounter++;
        }

        return result;
    }

    return Util;
});