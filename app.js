/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'test5.Application',

    name: 'test5',

    requires: [
        // This will automatically load all classes in the test5 namespace
        // so that application classes do not need to require each other.
        'test5.*'
    ],

    // The name of the initial view to create.
    mainView: 'test5.view.main.Main'
});
