Ext.define('MyDemo.view.button.Button2Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.button2',
    data: {//Ϊ�˳�ʼ������ʱ��ֵ
        style: '',
        type: 'text',
        round: false,
        disabled : false
    },

    icons: [
        'fa-home', 'fa-cog',
        'fa-archive', 'fa-heart',
        'fa-trash', 'fa-wrench'
    ],

    getIcon: function () {//������һ��������ɵĺ���
        var icons = this.icons,
            idx = Math.floor(Math.random() * icons.length);

        return 'x-fa ' + icons[idx];
    },

    formulas: {
        type: function(getter) {//���ڸ���������ģ�������ı����У�������ʾ������
            return getter('buttonType.value');//ȡ��style menu�����menuradioitem��value
        },
        style: function(getter) {
            return  getter('buttonStyle.value');//ȡ��type menu�����value
        },
        normalText: function (getter) {
            var type = getter('type');//�����type

            return type.indexOf('text') !== -1 ? 'Normal' : null;
        },
        smallText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Small' : null;
        },
        mediumText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Medium' : null;
        },
        largeText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Large' : null;
        },
        badgeText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Badge' : null;
        },
        disabledText: function (getter) {
            var type = getter('type');

            return type.indexOf('text') !== -1 ? 'Disabled' : null;
        },
        icon: function (getter) {
            var type = getter('type');

            return type.indexOf('icon') !== -1 ? this.getIcon() : '';
        },



        menu: function (getter) {
            var style = getter('style');//�����style

            return style === 'menu' ? [{text: 'Menu Item'}] : null;
        }
    }
});