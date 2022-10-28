function sockMerchant(n, ar) {
  // Write your code here
  let count = 0

  const numbersOfTypes = ar.reduce((counts, sock) => {
    counts[sock] = !counts[sock] ? 1 : ++counts[sock]

    return counts[sock], counts
  }, {})

  for (let key in numbersOfTypes) {
    count += parseInt(numbersOfTypes[key] / 2)
  }

  return count
}
