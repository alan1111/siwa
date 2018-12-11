Ext.define('MyDemo.view.dataBinding.DynamicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dynamic',

    contentSwitch: true,//�Լ������
    titleCount: 0,//����һ��Ҫ�����ı�����

    onChangeTitleClick: function() {
        this.getViewModel().set('title', 'New Title ' + ++this.titleCount);
        //�õ�viewModel �����е�title�����µ�ֵ set����
    },

    onChangeContentClick: function() {
        var content;

        if (this.contentSwitch) {
            content = 'hahaha';

            this.contentSwitch = false;
        } else {
            content = 'kukuku';

            this.contentSwitch = true;
        }

        this.getViewModel().set('content', content);//��viewModel�е����ݻ���
    }
});