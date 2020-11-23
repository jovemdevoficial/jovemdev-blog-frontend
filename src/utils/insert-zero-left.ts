export function insertZeroLeft(str: string): string {
  const strLength = str.length;
  const strFomated = str.padStart(strLength >= 2 ? 0 : 2, '0');
  return strFomated;
}
