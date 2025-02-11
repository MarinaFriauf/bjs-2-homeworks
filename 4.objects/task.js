function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	this.marks !== undefined ? this.marks.push(...marks) : console.log("отчислен");
}

Student.prototype.getAverage = function() {
	if (this.marks !== undefined) {
		return this.marks.reduce((acc, element, index, arr) => {
			acc += element;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0);
	} else return 0;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}