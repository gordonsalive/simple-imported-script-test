// jest comes with jsdom which is sufficient for my test app, in cfclanding
// clearly want to specificy some of the default and do it this way which in
// turn requires adding jsdom to package.json
//
// const { JSDOM } = require('jsdom');
//
// function jsdomTestSetup() {
//   const jsdomWindow = new JSDOM('<!DOCTYPE html><html><body></body></html>').window;
//
//   console.log('setting up jsdom attribs');
//
//   // Hexagon localisation is based on browser language so we set the JSDOM values here
//   Object.defineProperty(jsdomWindow.navigator, 'languages', {
//     value: ['en-GB', 'en', 'en-US'],
//   });
//   Object.defineProperty(jsdomWindow.navigator, 'language', {
//     value: 'en-GB',
//   });
//
//   Object.defineProperty(global, 'window', {
//     value: jsdomWindow,
//   });
//   Object.defineProperty(global, 'document', {
//     value: jsdomWindow.document,
//   });
// }
//
// jsdomTestSetup();

// note jest will clean the JSDOM document between test files (not individual tests in a single file)
