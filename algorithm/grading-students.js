function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => {
        if (grade >= 38 && grade % 5 >= 3) {
            return 5 * Math.ceil(grade / 5);
        }

        return grade;
    });
}
