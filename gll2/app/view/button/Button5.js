Ext.define('MyDemo.view.button.Button5', {
    extend: 'Ext.Container',
    xtype: 'mybtns5',

 /*   requires: [
        'Ext.SegmentedButton'
    ],*/

    cls: 'demo-solid-background',
    height: 60,
    layout: 'center',
    width: 300,

    items: [
        {
            xtype: 'segmentedbutton',//�ָ����İ�ť
            items: [{
                text: 'Option 1'
            }, {
                text: 'Option 2',
                pressed: true//����ȥ��
            }, {
                text: 'Option 3'
            }]
        }
    ]
});