const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

// Generate a unique name using custom dictionaries
const customConfig = {
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  length: 3,
};

function generateUsername() {
  return uniqueNamesGenerator(customConfig);
}

export { generateUsername };
