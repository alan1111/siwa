/**
 * Demonstrates how to use an Ext.Carousel in vertical and horizontal configurations
 */
Ext.define('MyDemo.view.carousel.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'mycarousel',

    defaults: {
        layout: 'center'//������ʾ����������
    },
    items: [{
        html: '<p>Swipe left to show the next card&hellip;</p>',//ʡ�Ժ�
        cls: 'stock-image stock-one-background',
        style: 'background-color: blue'
    }, {
        html: '<p>You can also tap on either side of the indicators.</p>',
        cls: 'stock-image stock-two-background',
        style: 'background-color: green'
    }, {
        html: 'Card #3',
        cls: 'stock-image stock-three-background',
        style: 'background-color: purple'
    }]
});