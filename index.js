function stringLength(string) {
  if (string.length === 0 || string.length > 10) {
    throw new Error("too big or empty string");
  }
  return string.length;
}

export default stringLength;