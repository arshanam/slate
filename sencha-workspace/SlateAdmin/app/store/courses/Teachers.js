/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('SlateAdmin.store.courses.Teachers', {
    extend: 'Ext.data.Store',

    model: 'SlateAdmin.model.person.Person',
    proxy: {
        type: 'slaterecords',
        url: '/sections/*teachers',
        startParam: false,
        limitParam: false
    }
});