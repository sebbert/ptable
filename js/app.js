requirejs.config({
    map: {
        '*': { 'jquery': 'lib/jquery-private' },
        'lib/jquery-private': { 'jquery': 'jquery' }
    },

    paths: {
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery'
    },

    shim: {
        'lib/underscore': {
            exports: '_'
        }
    }
});

define(['game', 'jquery'], function(Game, $) {
    var container = $('#game');

    var game = new Game();
    game.container = container;
    game.start();
    window.Game = game;
    
    $(container).removeClass("hidden");
});