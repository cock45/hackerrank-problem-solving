function organizingContainers(container) {
    // Write your code here
    const valueOfQueries = container
        .map((query) => query.reduce((total, value) => total + value, 0))
        .sort((a, b) => a - b);

    const numberPerTypes = new Array(container.length).fill(0);

    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container.length; j++) {
            numberPerTypes[i] += container[j][i];
        }
    }

    numberPerTypes.sort((a, b) => a - b);

    for (let i = 0; i < container.length; i++) {
        if (valueOfQueries[i] !== numberPerTypes[i]) {
            return 'Impossible';
        }
    }

    return 'Possible';
}
