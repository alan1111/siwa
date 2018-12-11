Ext.define('MyDemo.view.dataBinding.AssociationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.association',

    formulas: {
        person: function(get) {//����ֱ����view��ʹ��{person}�����ֵ
            return get('peopleList.selection');//peopleListΪreference���õ���ǰѡ�����һ��
            //һ����Ҫlookup()�������
        }
    },
    stores: {//Ext.data.Store��������������stores�����˶�̬�󶨣�����������̬�󶨵�ֵ���ó�ֵ���Żᴴ��store
        people: {//����ֱ����view��ʹ��{people}�����ֵ
            model: 'Person',//����Լ�����fields����Ĭ�ϴ���һ��model
            autoLoad: true,
            proxy: {
                type: 'memory',//��������
                data: MyDemo.model.Person.generateData({//���β��Զ�ִ�������ִ�к��� ��̬�飬������
                    includeAccounts: true,
                    total: 5
                })
            }
        }
    }
});