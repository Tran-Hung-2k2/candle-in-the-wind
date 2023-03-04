const { override, overrideDevServer, useBabelRc } = require("customize-cra");

module.exports = override(useBabelRc());
