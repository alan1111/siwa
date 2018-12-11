/*
 * Demonstrates all the animations
 */
Ext.define('MyDemo.view.animations.Animations', {
    extend: 'Ext.Container',
    xtype: 'animations',
    controller: 'animations',

   /* requires: [
        'MyDemo.view.animations.AnimationsController'
    ],
*/
    height: 430,
    width: 300,

    layout: {
        type: 'card'//card ���֣����ҳ�涼Ҫ��ʾʱ����������֣�tabpanel�����������
        //����ǰcard������ʾ����һ�����container��������������أ�
        //��ʹ��animation���ý������õ�ǰcardÿһҳ�������ԣ�ֵΪ�����string
        //type��'cover', 'cube', 'fade', 'flip', 'pop', 'reveal', 'scroll', or 'slide'
        //direction: 'up', 'down', 'left', or 'right'
        //����.setActiveItem(index) indexΪ��0��ʼ��ҳ�� ����λ������Ϊ��ǰ��ʾ��
        //����.setAnimation()
    },

    anims: [{
        group: 'Slide'
    }, {
        group: 'Cover'
    }, {
        group: 'Reveal'
    },
        'Fade',
        'Pop',
        'Flip'
    ],

    defaults: {
        defaultType: 'button',//add������Ϊ����������Ĭ�ϳ���button
        layout: 'vbox',//���� ���������
        padding: 20,
        scrollable: 'y'//�������
    }
});