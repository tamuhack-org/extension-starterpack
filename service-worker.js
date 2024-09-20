// This is like a background script

console.log("Howdy from background script!")

// Importing and using functionality from external files is also possible, relative to manifest.json
importScripts('service-worker-utils.js')
