Ext.define('MyDemo.view.dataBinding.State', {
    extend: 'Ext.Container',
    xtype: 'state',

    viewModel: true,//�����Լ����Լ������ݣ�����

    padding: 20,
    width: 400,
    autoSize: true,
    scrollable: 'y',
    items: [{
        xtype: 'checkboxfield',
        label: 'Is Admin',
        reference: 'isAdmin'
    }, {
        xtype: 'textfield',
        label: 'Admin Key',
        enforceMaxLength: true,
        bind: {
            disabled: '{!isAdmin.checked}'//��������������checkedֵ
        }
    }, {
        xtype: 'togglefield',
        label: 'Priority',
        reference: 'priority'
    }, {
        xtype: 'textfield',
        label: 'High Priority Code',
        hidden: true,
        bind: {
            hidden: '{!priority.value}'//��tooglefield��ֵ
        }
    }, {
        xtype: 'component',
        margin: '10 0 0',
        html: 'The admin key field is disabled when the admin checkbox is not checked. ' +
        'The high priority field is hidden when the priority is toggled.'
    }]
});