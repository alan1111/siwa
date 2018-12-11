/**
 * Demonstrates a range of split button options the framework offers out of the box
 */
Ext.define('MyDemo.view.button.Button3', {
    extend: 'Ext.Container',
    xtype: 'mybtns3',

    viewModel: {
        type: 'button3'
    },

/*    requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button',
        'Ext.SplitButton'
    ],*/

    scrollable: 'y',
    width: 650,
    autoSize: true,//������

    defaults: {
        autoSize: true//������
    },

    items: [{
        cls: 'demo-solid-background',
        shadow: 'true',
        defaults: {
            flex: '1 1 auto', //this allows auto-height in vbox
            margin: '10 20 20 20',
            layout: {
                type: 'hbox'//��������ÿ���ڲ���ֱ
            },
            autoSize: true//������
        },
        layout: {
            type: 'vbox'//��һ������ÿ������ˮƽ��
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
                cls: 'button-group',//����������ʶ�𣿣���
                flex: 1,
                minHeight: 55,
                autoSize: true,//������
                defaults: {
                    xtype: 'splitbutton',//���Ѱ�ť��
                    margin: '0 10',
                    menu: [{//�����ұ߸�menuѡ��
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {//�ĸ�Ҫ�󶨵����ݶ�����defaults�ʹ��һ�ж��߱��������
                        ui: '{style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'//0/1���Զ�ת��Ϊtrue��false
                        //menu:'{menu}'//���menu�ͻ�������menu���ǣ�������
                        // ����ûѡmenu�����ť��౨������
                        // ��Ϊsplitbuton����Ҫ�������ݵ�menu��û�����ݾͱ����ˣ�����
                    }
                },
                layout: {
                    type: 'hbox',//container�ڲ��ٴ�ֱ
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    height: '28px',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {//����style�����иߺ������С��������
                        fontSize: '12px',
                        lineHeight: '16px'
                    }
                }, {
                    height: '36px',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '14px',
                        lineHeight: '18px'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '42px',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '16px',
                        lineHeight: '20px'
                    }
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
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'alt {style} {round ? "round" : ""}',//alt��
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    height: '28px',
                    margin: '0 10 0 20',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '12px',
                        lineHeight: '16px'
                    }
                }, {
                    height: '36px',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '14px',
                        lineHeight: '18px'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '42px',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '16px',
                        lineHeight: '20px'
                    }
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
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised {style} {round ? "round" : ""}',//raised
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    height: '28px',
                    margin: '0 10 0 20',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '12px',
                        lineHeight: '16px'
                    }
                }, {
                    height: '36px',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '14px',
                        lineHeight: '18px'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '42px',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '16px',
                        lineHeight: '20px'
                    }

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
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised alt {style} {round ? "round" : ""}',//������ո����
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    height: '28px',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '12px',
                    }
                }, {
                    height: '36px',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '14px',
                        lineHeight: '18px'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '42px',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '16px',
                        lineHeight: '20px'
                    }
                }]
            }]
        }]
    }, {
        xtype: 'toolbar',
        docked: 'top',
        ui: 'transparent',//ûЧ������������͸��������
        padding: '5 8',
        layout: {
            type: 'hbox',//��ֱ
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',//�������Ӱ
            ui: 'action'//��ɫ��
        },
        items: [{
            text: 'Style',//û��ָ�����ͣ���menu���γ�������
            menu: {
                bind: {
                    groups: '{buttonStyle}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [{
                        text: 'None',
                        value: '',
                        checked: true
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                    {
                        text: 'Decline',
                        value: 'decline'
                    },
                    {
                        text: 'Confirm',
                        value: 'confirm'
                    }/*,{
                        text:'Menu',
                        value:'menu'
                    }*/
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
                items: [{
                        text: 'Text',
                        value: 'text',
                        checked: true//Ĭ��ѡ��
                    },
                    {
                        text: 'Icon',
                        value: 'icon'
                    },
                    {
                        text: 'Text & Icon',
                        value: 'text-icon'
                    }
                ]
            }
        }, {
            xtype: 'component',
            shadow: false,
            flex: 1
        }, {
            xtype: 'togglefield',
            bind: '{round}',
            boxLabel: 'Round',
            cls: 'demo-solid-background',
            margin: '0 20 0 0',
            padding: '0 10'
        }, {
            xtype: 'togglefield',
            bind: '{disabled}',
            boxLabel: 'Disabled',
            cls: 'demo-solid-background',
            margin: null,
            padding: '0 10'
        }]
    }]
});