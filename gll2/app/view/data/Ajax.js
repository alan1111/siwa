/**
 * Demonstrates loading data over AJAX.
 */
Ext.define('MyDemo.view.data.Ajax', {
    extend: 'Ext.Panel',
    xtype: 'ajax',
    controller: 'ajax',

    scrollable: true,

    tbar: [{
        text: 'Load using Ajax',
        handler: 'onLoad'
    }, {
        text: 'Format JSON',
        reference: 'formatBtn',
        enableToggle: true,//��������ȥ���ٵ������
        handler: 'onFormat'
    }],

    items: [{
        xtype: 'component',
        reference: 'results'
    }]
});