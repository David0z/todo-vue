export function inflectTask(number: number): string {
  if (number === 1) {
    return `${number} zadanie`
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return `${number} zadania`
  } else {
    return `${number} zadań`
  }
}
