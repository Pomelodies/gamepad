const truncate = (text) => {
  if (text.length > 300) {
    return text.substring(0, 300) + "...";
  }
  return text;
};

export default truncate;
