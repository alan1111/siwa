Ext.define('MyDemo.view.dataBinding.Formula', {
    extend: 'Ext.Container',
    xtype: 'formula',

    viewModel: {
        type: 'formula'
    },

    padding: 20,
    width: 400,
    autoSize: true,
    autoScroll:'y',
    items: [{
        xtype: 'spinnerfield',//������������ͷ�������ı���
        label: 'Number',//��������ʾ
        stepValue: 1,//�����ͷÿ�α仯����  ���������� minValue maxValue cycle ѭ��
        bind: '{x}'//��model���x,�ı��ͬʱ��ʹԭֵ�����ı�
    }, {
        xtype: 'textfield',
        readOnly: true,//ֻ��
        label: 'Times 2',
        bind: '{x} * 2 = {twice}'
    }, {
        xtype: 'textfield',
        readOnly: true,
        label: 'Times 4',
        bind: '{x} * 4 = {quad}'
    }, {
        xtype: 'component',
        margin: '10 0 0',
        instructions: 'As the field changes, the formula calculates the 2x and 4x values.'
    }]
});