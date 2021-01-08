export const truncate = (field: string, maxChar: number): string => {
  if (field.length > maxChar) {
    field = field.substring(0, maxChar)
    field =
      field.substring(0, Math.min(field.length, field.lastIndexOf(' '))) +
      ' . . .'
    return field
  }
  return field
}
