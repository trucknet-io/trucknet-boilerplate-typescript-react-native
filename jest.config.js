module.exports = {
  preset: "react-native",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.ts$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
};
