const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessos')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}
