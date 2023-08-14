// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
import { defineConfig } from "cypress";
import purpleHatsInit from "@govtechsg/purple-hats";

const ph = await purpleHatsInit(
    "https://govtechsg.github.io",
    "Demo Cypress Scan",
    "Your Name",
    "email@domain.com"
);

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("task", {
                getPhScripts() {
                    return ph.getScripts();
                },
                async pushPhScanResults(res) {
                    await ph.pushScanResults(res);
                    return null;
                },
                returnResultsDir() {
                    return `results/${ph.randomToken}_${ph.scanDetails.urlsCrawled.scanned.length}pages/reports/report.html`;
                },
                async terminatePh() {
                    return await ph.terminate();
                },
            });
        },
    },
});