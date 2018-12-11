/*
 * Demonstrates all the animations
 */
Ext.define('KitchenSink.view.animations.Animations', {
    extend: 'Ext.Container',
    xtype: 'animations',
    controller: 'animations',

    requires: [
        'KitchenSink.view.animations.AnimationsController'
    ],

    height: 430,
    width: 300,

    layout: {
        type: 'card'
    },

    anims: [{
        group: 'Slide'
    }, {
        group: 'Cover'
    }, {
        group: 'Reveal'
    },
        'Fade',
        'Pop',
        'Flip'
    ],

    defaults: {
        defaultType: 'button',
        layout: 'vbox',
        padding: 20,
        scrollable: 'y'
    }
});