Ext.define('MyDemo.view.dataBinding.Association', {
    extend: 'Ext.Container',
    xtype: 'association',

    viewModel: {
        type: 'association'
    },

    height: 400,
    referenceHolder: true,//�����һ�����ͱ����reference��������Ĭ��false
    // �����controller���Զ������holder���˴�û��controller�����������һ��
    width: 400,

    layout: {
        type: 'vbox',//ˮƽ�Ų�
        align: 'stretch'
    },

    items: [{
        xtype: 'list',//Ext.dataview.List  һ��һ����ʾ���ݵģ����store�������grouper���Է�����ʾ
        flex: 2,
        title: 'People',
        itemTpl: '{firstName} {lastName}',//���������render����
        reference: 'peopleList',
        bind: '{people}'//��������ݸ�itemTpl
    }, {
        xtype: 'list',
        flex: 3,
        itemTpl: 'Created: {created:date("Y-m-d")}, Key: {accountKey}',
        //���ص��û�������������ֶ�,created�ú����ת���˸�ʽ��
        items: [{//�����list����������˸�titleBar
            xtype: 'titlebar',//Ext.TitleBar
            docked: 'top',
            title: 'Accounts',//��toolbar����Ҫ�������title��
            //�ɼ���items������Ĭ�϶��ǰ�ť����ʹ��text align��'left'/'right'ʵ�ְ�ť��title��������
            bind: 'Accounts for {person.firstName} {person.lastName}'//����󶨵�����
        }],
        bind: '{person.accounts}'//���ݻ��itemTpl  ��ǰѡ�����һ����accounts
    }]
});