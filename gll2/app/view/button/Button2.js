/**
 * Demonstrates a range of Button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button2', {
    extend: 'Ext.Container',
    xtype: 'mybtns2',

    viewModel: {
        type: 'button2'
    },

    /*requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button'
    ],*/

    scrollable: 'y',
    width: 600,
    autoSize: true,//������Ļ��modernҪ��

    defaults: {
        autoSize: true//����ҲҪ��
    },
    items: [{
        cls: 'demo-solid-background',
        shadow: 'true',//true ������Ӱ Ĭ��  false��ȡ����Ӱ
        defaults: {
            flex: '1 1 auto', //this allows auto-height in vbox
            margin: '10 20 20 20',
            layout: {
                type: 'hbox'//ÿһ�а�ť�ڲ���ֱ�ţ���ʵ��container��component��ֱ�ţ�
            },
            autoSize: true
        },
        layout: {
            type: 'vbox'//ÿ�а�ťˮƽ��
        },
        items: [{
            //�����һ��
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
                flex: 1,
                minHeight: 55,
                autoSize: true,
                defaults: {//
                    xtype: 'button',
                    margin: '0 10',
                    bind: {//��viewMoodel�������
                        ui: '{style} {round ? "round" : ""}',
                        //�������round�����Ҳ����round������ֵ�����ı�0/1��viewModelֵҲ��仯����ʱui���Ծͱ仯
                        //����style��ȡ�ù�������style��ֵ������Ϊ������action��decline��������
                        iconCls: '{icon}',//��type����value������û��icon�������о��������һ������
                        menu: '{menu}'//��style��ֵ�ǲ���menu���Ǿͷ���һ��[{text: 'Menu Item'}]���󼯺ϣ�����null
                    }
                },
                layout: {
                    type: 'hbox',//component�ڲ���ť��ֱ��
                    align: 'middle',//
                    pack: 'space-around'//ȫ������
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'//����type��value��������text������normal
                    }
                }, {
                    bind: {
                        text: '{badgeText}'//����type��value��������text������badge
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'//����type��value��������text������disable
                    },
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
                autoSize: true,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'alt {style} {round ? "round" : ""}',//�и�alt�����ŵģ�����
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
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
                autoSize: true,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'raised {style} {round ? "round" : ""}',//͹����
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
                    disabled: true
                }]
            }]
        }, {
            items: [{
                xtype: 'component',
                cls: 'button-group-label button-group-right',
                padding: '25 10 0 0',
                width: 75,
                html: 'Alt Raised',
                autoSize: true
            }, {
                xtype: 'container',
                cls: 'button-group alt',
                flex: 1,
                minHeight: 55,
                defaults: {
                    xtype: 'button',
                    margin: '0 10',
                    bind: {
                        ui: 'raised alt {style} {round ? "round" : ""}',//raised alt ͹�𣬷��š�
                        iconCls: '{icon}',
                        menu: '{menu}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    bind: {
                        text: '{normalText}'
                    }
                }, {
                    bind: {
                        text: '{badgeText}'
                    },
                    badgeText: '2'
                }, {
                    margin: '0 20 0 10',
                    bind: {
                        text: '{disabledText}'
                    },
                    disabled: true
                }]
            }]
        }]
    }, {
        xtype: 'toolbar',//��������������Է��ð�ť�Ȳ����õĶ���
        docked: 'top',//���С�bottom��,��ʾ�������������
        ui: 'transparent',//͸���ģ�������
        padding: '5 8',
        layout: {
            type: 'hbox',//����ֱ�Ų�
            align: 'stretch'//������չ
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',//������Ӱ
            ui: 'action'//�����ɫ��
        },
        items: [{
            text: 'Style',
            menu: {//����
                bind: {
                    groups: '{buttonStyle}'
                },
                defaults: {
                    xtype: 'menuradioitem',//������menu��ģ�menu��groups��
                    // items��ÿ���group�������group���ã����Զ�����menuradioitem����ѡ����
                    group: 'value'//����������д������ֵҪһ��
                },
                //ͨ��buttonStyle.value ����ȡ��group��������
                items: [
                    { text: 'None', value: '', checked: true },//menuradioitem
                    { text: 'Action', value: 'action' },
                    { text: 'Decline', value: 'decline' },
                    { text: 'Confirm', value: 'confirm' },
                    { text: 'Menu', value: 'menu' }
                ]
            }
        }, {
            text: 'Type',
            menu: {
                bind: {
                    groups: '{buttonType}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [
                    { text: 'Text', value: 'text', checked: true },
                    { text: 'Icon', value: 'icon' },
                    { text: 'Text & Icon', value: 'text-icon' }
                ]
            }
        }, {
            xtype: 'component',
            shadow: false,
            flex: 1
        }, {
            xtype: 'togglefield',//������ֵ�ĵ�����  value=1ʱ����
            bind: '{round}',//����round�����ڸı�viewModel�����ֵ��
            boxLabel: 'Round',//��ǩ
            cls: 'demo-solid-background',
            margin: null,
            padding: '0 10'
        }]
    }]
});