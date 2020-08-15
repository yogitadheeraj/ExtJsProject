Ext.define('School.view.student.StudentList', {
	extend: 'Ext.Panel',
	xtype: 'studentList',
	controller: 'student-list',
	viewModel: {
		type: 'studentviewmodel',
		data: {
			buttonDisable: true
		}
	},
	reference: 'studentlistgrid',
	dockedItems: [{
		xtype: 'toolbar',
		items: ['->', {
			text: 'Edit',
			handler: 'onEditClick',
			reference: 'btnEditStudent',
			bind: {
				disabled: '{buttonDisable}'
			},
			itemId: 'eidtStudent',
			iconCls: 'edit',
			scale: 'medium',
			tooltip: 'Select Record to Edit',
			tooltipType: 'qtip'
		}, {
				itemId: 'removeStudent',
				text: 'Delete',
				reference: 'btnRemoveStudent',
				handler: 'onRemoveClick',
				bind: {
					disabled: '{buttonDisable}'
				},
				iconCls: 'delete',
				scale: 'medium',
				tooltip: 'Select Record to Delete',
				tooltipType: 'qtip'
			}
		]
	}],
	items: Ext.create('Ext.view.View', {
		bind: {
			store: '{StudentListStore}'
		},
		tpl: [
			'<tpl for=".">',
			'<div class="thumb-wrap" id="{index}">',
			'<div class="thumb">Name : {name}</div>',
			'<div class="thumb">Description : {description}</div>',
			'<div class="thumb">Job Title : {jobTitle}</div>',
			'</div>',
			'</tpl>',
			'<div class="x-clear"></div>'
		],
		xtype: 'studentList-dataView',
		trackOver: true,
		overItemCls: 'x-item-over',
		itemSelector: 'div.thumb-wrap',
		emptyText: 'No images to display',
		listeners: {
			scope: 'controller',
			selectionchange: 'onSelectButtonDisable'
		}
	})
});