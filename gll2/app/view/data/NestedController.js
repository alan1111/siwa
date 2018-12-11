Ext.define('MyDemo.view.data.NestedController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nestedloading',

    onLoad: function () {
        var dataview = this.lookup('dataview'),//reference ��lookup��ʹ�ã����ڵõ�����
            store = dataview.getStore();//�õ�store

        store.load();//����store��ʹ������ʾ����
    },

    onExplain: function () {
        Ext.Msg.alert(
            'Loading Nested Data',

            '<p>The data package can load deeply nested data in a single request. In this example we are loading a fictional ' +
            'dataset containing Users, their Orders, and each Order\'s OrderItems.</p>' +
            '<p>Instead of pulling down each record in turn, we load the full data set in a single request and allow the data ' +
            'package to automatically parse the nested data.</p>' +
            '<p>As one of the more complex examples, it is worth tapping the "Source" button to see how this is set up.</p>'
        );
    }
});