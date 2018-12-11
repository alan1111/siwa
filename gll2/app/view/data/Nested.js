/*
 * This panel sets up a DataView, which defines an XTemplate used to render our data. We also set up
 * the toolbar with the "Load Nested Data" button here
 */
Ext.define('MyDemo.view.data.Nested', {
    extend: 'Ext.Panel',
    xtype: 'nestedloading',
    controller: 'nestedloading',

    height: 400,
    layout: 'fit',
    width: 400,

    tbar: [{
        text: 'Load Nested Data',
        handler: 'onLoad'
    }, {
        text: 'Explain',
        handler: 'onExplain'
    }],

    items: [{
        xtype: 'dataview',//���������һ��Store��itemTpl�����ڱ���store������ݲ�չ�ֳ���
        reference: 'dataview',
        emptyText: 'No Data Loaded',
        padding: 10,
        /*
         * The XTemplate allows us to easily render the data from our User model, as well as
         * iterating over each User's Orders and OrderItems:
         */
        itemTpl: '<div class="user">' +//Ҳ�Ǳ���������൱���Ѿ���һ��tpl for����һ��Ext.XTemplate
            '<h3>{name}\'s orders:</h3>' +
            '<tpl for="orders">' +
                '<div class="order" style="padding: 0 0 10px 20px;">' +
                    'Order: {id} ({status})' +
                    '<ul>' +
                        '<tpl for="orderItems">' +
                        '<li>{quantity} x {name}</li>' +
                        '</tpl>' +
                    '</ul>' +
                '</div>' +
            '</tpl>' +
        '</div>',
        store: {
            model: 'User',//��û��User���model  ֻ��model��֤��proxy��model���棡������
            autoDestroy: true
        }
    }]
});