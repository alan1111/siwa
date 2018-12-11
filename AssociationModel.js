Ext.define('MyDemo.view.dataBinding.AssociationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.association',

    formulas: {
        person: function(get) {
            return get('peopleList.selection');//peopleList为reference，得到当前选择的那一条
        }
    },
    stores: {//Ext.data.Store的声明，如果这个stores里用了动态绑定，则必须给到动态绑定的值设置初值，才会创建store
        people: {//可以直接在view里使用{people}绑定这个值
            model: 'Person',//用里面的fields
            autoLoad: true,
            proxy: {
                type: 'memory',//本地数据
                data: MyDemo.model.Person.generateData({//传参并自动执行这个自执行函数
                    includeAccounts: true,
                    total: 5
                })
            }
        }
    }
});