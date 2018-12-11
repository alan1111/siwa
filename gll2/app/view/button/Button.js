/**
 * Demonstrates a range of Button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button', {
    extend: 'Ext.Container',
    xtype: 'mybtns',

    requires: [
        //'Ext.layout.HBox',//��ֱ�Ų�
        //'Ext.layout.VBox',//ˮƽ�Ų�
        //'Ext.Button'
    ],

    scrollable: 'y',//��ֱ����
    width: 530,//
    autoSize: true,//�游Ԫ�صĴ�С�仯���Զ��仯

    defaults: {//���������
        margin: '10 20',
        autoSize: true,
        layout: {
            type: 'hbox'//��ֱ�Ų��������Ժ�component��container��һ��
        }
    },

    items: [{
        margin: '20 20 10',
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Default'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,//��widthʣ���ռһ�ݣ����ֻ���Լ�����ȫռ
            minHeight: 55,//��͸߶�
            //defaultType: 'button',//����Ĭ��
            defaults: {//����Ĭ��
                xtype:'button',
                margin: '0 10'
            },
            layout: {
                type: 'hbox',
                align: 'center',//start�� center�� end�� stretch��ֱ����
                pack: 'space-around'//start�� center�� end�� space-between����ռ������ space-around���� justifyͬbetween
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'//�и��Ǳ꣬��ʾ2
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Alt'
        }, {
            xtype: 'container',
            cls: 'button-group alt',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui: 'alt'//null �ҵ�Ĭ�� back forward round plain action decline confirm
                //action-round decline-round confirm-round
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Raised'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui: 'raised'//��ʾͻ����
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                text: 'Normal'
            }, {
                text: 'Badge',
                badgeText: '2'
            }, {
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true
            }]
        }]
    }, {
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Menu'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaults: {
                margin: '0 10'
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                xtype: 'button',
                margin: '0 10 0 20',
                text: 'Normal',
                menu: [{//������xtype menu�����ʵ�� �������ö��󣨴˴����ǣ�,�����˵�һ����
                    text: 'Menu Item'
                }]
            }, {
                xtype: 'button',
                text: 'Badge',
                badgeText: '2',
                menu: [{
                    text: 'Menu Item'
                }]
            }, {
                xtype: 'button',
                margin: '0 20 0 10',
                text: 'Disabled',
                disabled: true,
                menu: [{
                    text: 'Menu Item'
                }]
            }]
        }]
    }, {
        margin: '10 20 20',
        items: [{
            xtype: 'component',
            cls: 'button-group-label button-group-right',
            padding: '25 10 0 0',
            width: 75,
            html: 'Icon'
        }, {
            xtype: 'container',
            cls: 'button-group',
            flex: 1,
            minHeight: 55,
            defaultType: 'button',
            defaults: {
                margin: '0 10',
                ui:'round'
            },
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'space-around'
            },
            items: [{
                margin: '0 10 0 20',
                iconCls: 'x-fa fa-home',//û��text��ֻ��һ��iconCls������ͷ��ͼ��
               // ui: 'round'
            }, {
                iconCls: 'x-fa fa-home',
                badgeText: '2',
              //  ui: 'round'
            }, {
                margin: '0 20 0 10',
                iconCls: 'x-fa fa-home',
              //  ui: 'round',
                disabled: true
            }]
        }]
    }]
});