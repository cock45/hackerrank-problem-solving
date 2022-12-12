function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => {
        if (grade >= 38 && grade % 5 >= 3) {
            return grade - grade % 5 + 5;
        }

        return grade;
    });
}