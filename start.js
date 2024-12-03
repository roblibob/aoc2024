const path = require("path");
const { exec } = require("child_process");

// Get the input argument (e.g., 'temp')
const folder = process.argv[2];
if (!folder) {
  console.error("Error: You must specify a folder.");
  process.exit(1);
}

// Build the path to the index.js file
const scriptPath = path.join(__dirname, "dist", folder, "index.js");

// Run the script
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  console.log(stdout);
});