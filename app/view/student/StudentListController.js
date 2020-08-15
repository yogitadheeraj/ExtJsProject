Ext.define('School.view.student.StudentListController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.student-list',
	viewModel: {
		type: 'studentviewmodel'
	},
	onEditClick: function (nodes) {
		// find view component
		var parItem = this.getParentItem();
		var view = parItem.down('dataview');
		// get all selected records
		var record = view.getSelectionModel().getSelection();
		var studentForm = parItem.up().up();
		studentForm.getForm().setValues(record[0].getData());
	},
	onLoadClick: function () {
		var studentStore = this.getView().getStore();
		studentStore.load();
	},
	onRemoveClick: function () {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},
	onConfirm: function (choice) {
		if (choice === 'yes') {
			var parItem = this.getParentItem();
			var studentGrid = parItem.down('dataview');
			var studentStore = studentGrid.getStore();
			var studentForm = parItem.up().up();
			studentForm.getForm().getFields().each(function (field) {
				field.validateOnChange = false;
				field.setValue('');
				field.resetOriginalValue();
			});
			this.getView().lookupViewModel().set('buttonDisable', true);
			//delete selected rows if selModel is checkboxmodel
			var selectedRows = studentGrid.getSelectionModel().getSelection();
			studentStore.remove(selectedRows);
		}
	},
	getParentItem: function () {
		return Ext.ComponentQuery.query('studentList')[0];
	},
	onSelectButtonDisable: function (sender, record) {
		this.getView().lookupViewModel().set('buttonDisable', !(record.length > 0));
	}
});