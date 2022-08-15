export function validateStringNotEmpty(value) {
  let str = value.trim().length === 0
  if (str) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}
