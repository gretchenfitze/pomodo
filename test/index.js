/* eslint-disable */
var testsContext = require.context("./src/", true, /\.(js|jsx)$/);
testsContext.keys().forEach(function(path) {
    try {
        testsContext(path);
    } catch(err) {
        console.error('[ERROR] WITH SPEC FILE: ', path);
        console.error(err);
    }
});
