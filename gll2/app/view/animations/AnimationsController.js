Ext.define('MyDemo.view.animations.AnimationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.animations',

    init: function (view) {//�������������ͼ�ĳ�ʼ��ʱ�����ã�����ͼ��initComponent��������֮�����
        //�������������ͼ����animations
        var me = this,//��������ǿ���Լ����ã�Ӧ��Ҳ�ǵ�ǰ���viewController
            anims = view.anims,//�õ�����
            items = [];//�������һ�Ѷ���

        anims.forEach(function (button) {//button��anims���ÿһ��
            if (Ext.isObject(button)) {
                items.push(
                    me.createButton(button.group + ' Left'),//����һ�����󣬷���������
                    me.createButton(button.group + ' Right'),
                    me.createButton(button.group + ' Top'),
                    me.createButton(button.group + ' Bottom', {
                        margin: '0 0 10 0'
                    })
                );
            } else {
                items.push(me.createButton(button));
            }
        });

        view.add([{//�����齫��������add��ȥ
            items: items
        }, {
            items: items
        }]);//add���������ȥʱ����Ϊ��card��������ҳ��ʾ��
    },

    createButton: function (name, cfg) {//�ڶ�����������û��
        return Ext.apply({//���÷�������cfg��������и�����һ�����󣬷�����ɵĶ���
            text: name,
            handler: 'onButtonTap'
        }, cfg);//����һ���Ժ�Ὣ{margin: '0 0 10 0'}�����ȫ�����Լӵ�name����
    },

    getAnimation: function(type) {
        var parts = type.toLowerCase().split(/\s+/);//���ո��

        return {//������һ��animation�������Ǹ�nameֵ
            type: parts[0],
            direction: parts.length > 1 ? parts[1] : undefined,
            duration: 500//����ʱ��
        };
    },

    onButtonTap: function(button) {//����Ϊ�����İ�ť������
        var view = this.getView(),//thisΪviewController  �õ���ͼ����
            activeItem = view.getActiveItem(),//�õ���ʾ���Ǹ����󣬹�����
            layout = view.getLayout(),//�õ�layoout����{ type����card��}
            animation = this.getAnimation(button.getText()),//���ݲ��������button�����ƣ�����һ��animation����
            currentIdx = view.indexOf(activeItem);//�õ���ǰ��ʾ�����λ��

        layout.setAnimation(animation);//��layout����animation���ԣ�ֵ��һ������

        view.setActiveItem(currentIdx === 0 ? 1 : 0);//�������Ժ󣬸�����ʾ�Ķ������������һ��
    }
});