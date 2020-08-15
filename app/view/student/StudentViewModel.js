Ext.define('School.view.student.StudentViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.studentviewmodel',
	stores: {
		StudentListStore: {
			storeId: 'simpsonsStore',
			model: 'School.model.Personnel',
			data: [
				{ name: 'Lisa', description: 'Hi All Test My Book', jobTitle: 'SR', index: 1 },
				{ name: 'Bart', description: 'Test All And Manage Compam', jobTitle: 'HR', index: 2 },
				{ name: 'Homer', description: 'Good Lo', jobTitle: 'SE', index: 3 },
				{ name: 'Marge', description: 'Test Bro', jobTitle: 'Team Lead', index: 4 }
			]
		}
	}
});