Ext.define('School.view.student.StudentForm', {
	extend: 'Ext.form.Panel',
	xtype: 'studentForm',
	controller: 'student',
	layout: 'border',
	height: window.screen.availHeight,
	bodyBorder: false,
	defaults: {
		split: true,
		bodyPadding: 10
	},
	items: [
		{
			title: 'DataView',
			region: 'west',
			floatable: false,
			itemId: 'studentListStoreId',
			reference: 'studentListStore',
			margin: '5 0 0 0',
			width: '75%',
			items: {
				xtype: 'studentList'
			}
		},
		{
			title: 'Form',
			collapsible: false,
			itemId: 'studentFormId',
			reference: 'studentFormEdit',
			region: 'center',
			margin: '5 0 0 0',
			items: [
				{
					xtype: 'hiddenfield',
					name: 'index',
					value: 0
				}, {
					fieldLabel: 'Name',
					name: 'name',
					allowBlank: false,
					width: '100%',
					xtype: 'textfield'
				},
				{
					xtype: 'textarea',
					fieldLabel: 'Description',
					width: '100%',
					allowBlank: false,
					name: 'description'
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Job Title',
					width: '100%',
					allowBlank: false,
					name: 'jobTitle'
				},
				{
					dock: 'bottom',
					border: false,
					xtype: 'toolbar',
					items: [{
						text: 'Save',
						itemId: 'btnCreate',
						formBind: true,
						handler: 'onCreateClick'
					},
					{
						text: 'Cancel',
						itemId: 'btnClear',
						handler: 'onClearClick'
					}]
				}
			]
		}
	]
});