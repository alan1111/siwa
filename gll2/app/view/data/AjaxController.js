Ext.define('MyDemo.view.data.AjaxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ajax',

    onLoad: function () {
        this.getView().setMasked({//����һ��������ڸ����
            xtype: 'loadmask',
            message: 'Loading...'
        });

        Ext.Ajax.request({
            url: 'data/test.json',//params:����Ĳ����ö��Ÿ�������������Ҫ����������Ĳ���
            //���������˷����ǡ�text/json������ʱ���ͻ�����Ҫʹ��obj= Ext.util.JSON.decode(result.responseText);���й���json����
            //method :get post
            //callback��options,success,response�����ص�����  op���������õĲ���
            scope: this,//ִ�лص������ķ�Χ��Ĭ��ֵΪ���������
            failure: this.failureCallback,
            success: this.successCallback//��Ӧ�ɹ���Ļص�����
        });
    },

    onFormat: function (btn) {//btnΪ�������¼����еĲ��������Կ�����
        var results = this.lookup('results'),
            data = this.lastResponse;//�ڳɹ���ʱ������һ��this.lastResponse�������������ֵ������

        if (data) {
            this.render(data, btn.isPressed());//�������ť�ı���ʽ
        }
    },

    failureCallback: function () {
        Ext.Msg.alert('Ajax Load Error', 'There was an error while loading the data.');
    },

    successCallback: function (response) {//responseΪsuccess������еĲ��������Կ�����
        var formatBtn = this.lookup('formatBtn'),
            results = this.lookup('results'),
            data = this.lastResponse = response.responseText;//�ɹ��󷵻ص����ݣ�ͬʱ����һ��lastResponse����ֵ���ȥ���Ա�ʹ�ã�

        this.render(data, formatBtn.isPressed());//�ڶ�������Ϊ��ť�Ƿ��£����ذ���Ϊtrue

        this.getView().unmask();//�ɹ��Ƴ�mask������ͨ��view��set un
    },

    render: function (data, format) {//�����ݷŵ�ҳ���ϣ��ڶ������������ж�Ҫ��Ҫ��pre
        var results = this.lookup('results');

        if (format) {//true����pre
            results.setHtml('<pre>' + data + '</pre>');//pre�����ո��з���Դ��ȫ�����
        } else {
            results.setHtml(data);//ѹ�����
        }
    }
});