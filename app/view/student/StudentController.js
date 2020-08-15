Ext.define('School.view.student.StudentController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.student',
	getParentItem: function () {
		return Ext.ComponentQuery.query('studentList')[0];
	},
	onCreateClick: function (sender, record) {
		var store = Ext.data.StoreManager.lookup('simpsonsStore');
		var studentForm = this.getView().getForm();
		if (!studentForm.isDirty()) {
			Ext.Msg.alert('Status', 'No new data to create.');
			return;
		}
		else if (!studentForm.isValid()) {
			Ext.Msg.alert('Status', 'Invalid data.');
			return;
		}
		var parItem = this.getParentItem();
		var item = studentForm.getValues();
		if (!item.index || item.index==0) {
			item.index = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
			store.add(item);
		}
		else {
			var view = parItem.down('dataview');
			// get all selected records
			var record = view.getSelectionModel().getSelection();
			record[0].data = item;
			store.insert(store.indexOf(record[0]), record);
			view.getSelectionModel().deselectAll();
		}
		studentForm.getFields().each(function (field) {
			field.setValue('');
			field.resetOriginalValue();
		});
		
		parItem.lookupViewModel().set('buttonDisable', true); //we can set button disable after edit/save
		this.getView().reset();
	},
	onClearClick: function (sender, record) {
		this.getView().reset();
	}
});