export const fetchStudents = async () => {
	try {
		const res = await fetch('http://localhost:8080/api/students');
		const data = await res.json();
		return data;
	} catch (error) {
		return error;
	}
};

export const addNewStudent = async student => {
	await fetch('http://localhost:8080/api/students', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(student),
	});
};
