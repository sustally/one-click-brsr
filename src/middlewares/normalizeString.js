// Helper function to normalize spaces and trim the string
const normalizeString = (str) => {
  return str.trim().replace(/\s+/g, " "); // Replace multiple spaces with a single space
};

module.exports = normalizeString;
