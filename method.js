const student = {
    name: "Sourav",
    money: 5000,
    study: 'Management',
    subjects: ['Accounting', 'Financial', 'Economics'],
    takeExam: function () {
        return (this.name + ' is participationg in an exam');
    },
    improveExam: function(subject) {
        this.takeExam();
        return `${this.name} is takeing improvement of ${subject}`;
    },
    treatDey: function(amount) {
        this.money = this.money - amount
        return this.money;
    },
}



console.log(student.treatDey(200));


