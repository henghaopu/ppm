// reference: http://unicode.org/mail-arch/unicode-ml/y2005-m11/0060.html
const codePointAtInUPlusNotation = (str: string, pos: number): string => {
  if (pos < 0 || pos >= str.length) {
    throw Error('The char position is not valid.')
  }

  return `U+${(str.codePointAt(pos) as number).toString(16).padStart(4, '0')}`
}

export default codePointAtInUPlusNotation
