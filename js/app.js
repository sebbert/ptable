requirejs.config({
    paths: {
        'underscore': 'lib/underscore'
    },

    shim: {
        'lib/underscore': {
            exports: '_'
        }
    }
})

define(['underscore'], function(_) {
    
});