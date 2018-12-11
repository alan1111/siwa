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
    autoSize: true,//！！！

    defaults: {
        autoSize: true//！！！
    },

    items: [{
        cls: 'demo-solid-background',
        shadow: 'true',
        defaults: {
            flex: '1 1 auto', //this allows auto-height in vbox
            margin: '10 20 20 20',
            layout: {
                type: 'hbox'//子项的子项，每行内部垂直
            },
            autoSize: true//！！！
        },
        layout: {
            type: 'vbox'//第一个对象，每个子项水平排
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
                cls: 'button-group',//？？？？不识别？？？
                flex: 1,
                minHeight: 55,
                autoSize: true,//！！！
                defaults: {
                    xtype: 'splitbutton',//分裂按钮，
                    margin: '0 10',
                    menu: [{//分裂右边给menu选择
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {//四个要绑定的数据都放在defaults里，使这一行都具备这个属性
                        ui: '{style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'//0/1会自动转换为true或false
                        //menu:'{menu}'//这个menu就会把上面的menu覆盖！！！！
                        // 但是没选menu点击按钮左侧报错！！！
                        // 因为splitbuton必须要有有数据的menu，没有数据就报错了！！！
                    }
                },
                layout: {
                    type: 'hbox',//container内部再垂直
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    height: '28px',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {//加了style，将行高和字体大小进行限制
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
                        ui: 'alt {style} {round ? "round" : ""}',//alt版
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
                        ui: 'raised alt {style} {round ? "round" : ""}',//多个，空格隔开
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
        ui: 'transparent',//没效果！！！！！透明？？？
        padding: '5 8',
        layout: {
            type: 'hbox',//垂直
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',//子项都有阴影
            ui: 'action'//蓝色·
        },
        items: [{
            text: 'Style',//没有指定类型，有menu就形成了下拉
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
                        checked: true//默认选中
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