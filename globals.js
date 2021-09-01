const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  }
};


//vai ei way ta allure commandLine er, apni jei source disilen oitay kaj hoy na bidhay eita try korislam
// var allure = require("allure-commandline");

// module.exports = {
//     reporter: function(results , done) {
//       let srcResult = "./tests_output";
//       var generation = allure(["generate", "--clean", srcResult]);
//       generation.on ('exit',()=>{
//         done();
//       });
//     }
// };