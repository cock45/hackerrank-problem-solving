function catAndMouse(x, y, z) {
  const result = ['Cat A', 'Mouse C', 'Cat B']

  return result[Math.sign(Math.abs(x - z) - Math.abs(y - z)) + 1]
}
