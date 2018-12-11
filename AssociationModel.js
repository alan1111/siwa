Ext.define('MyDemo.view.dataBinding.AssociationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.association',

    formulas: {
        person: function(get) {
            return get('peopleList.selection');//peopleListΪreference���õ���ǰѡ�����һ��
        }
    },
    stores: {//Ext.data.Store��������������stores�����˶�̬�󶨣�����������̬�󶨵�ֵ���ó�ֵ���Żᴴ��store
        people: {//����ֱ����view��ʹ��{people}�����ֵ
            model: 'Person',//�������fields
            autoLoad: true,
            proxy: {
                type: 'memory',//��������
                data: MyDemo.model.Person.generateData({//���β��Զ�ִ�������ִ�к���
                    includeAccounts: true,
                    total: 5
                })
            }
        }
    }
});