const textInsideBrackets = (text: string) => {
  return `(${text})`;
}

export const getShortUrl = (url: string | undefined | null): string => {
  if (url == null) return '';

  let start = url.indexOf('//');
  if (start === -1) return (textInsideBrackets(url));

  start += 2; // Index of the first character of the url after https://
  const end = url.indexOf('/', start);
  if (end === -1) return textInsideBrackets(url.substring(start));

  if (url.substring(start).indexOf('www.') === 0) return textInsideBrackets(url.substring(start + 4, end)); // remove www. from the beginning of url

  return textInsideBrackets(url.substring(start, end));
}

export const getDateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // timestamp is seconds
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}