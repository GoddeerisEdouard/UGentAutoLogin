const fs = require("fs");
const path = require("path");

const platforms = {
  chrome: {
    source: "config/chrome",
    dist: "dist/chrome/",
  },
  firefox: {
    source: "config/firefox",
    dist: "dist/firefox/",
  },
};

function build(platform) {
  const config = platforms[platform];
  if (!config) {
    console.error(`Invalid platform: ${platform}`);
    process.exit(1);
  }

  // create dist folder if it doesn't exist
  if (!fs.existsSync(config.dist)) {
    fs.mkdirSync(config.dist, { recursive: true });
  }

  // copy manifest and platform-specific files
  const platformFolder = path.resolve(config.source);
  fs.cpSync(platformFolder, config.dist, {
    recursive: true
  });

  // copy src folder
  const srcFolder = path.resolve("src");
  const targetSrcFolder = path.join(config.dist, "src");
  fs.cpSync(srcFolder, targetSrcFolder, { recursive: true });

  // copy assets/icons folder
  const iconsFolder = path.resolve("assets/icons");
  const targetIconsFolder = path.join(config.dist, "assets/icons");
  fs.mkdirSync(path.dirname(targetIconsFolder), { recursive: true });
  fs.cpSync(iconsFolder, targetIconsFolder, { recursive: true });

  console.log(`Build for ${platform} completed in dist/`);
}

// run build based on command-line argument
const platform = process.argv[2];
if (!platform) {
  console.error("Usage: node build.js <platform>");
  console.error(`Available platforms: ${Object.keys(platforms).join(", ")}`);
  process.exit(1);
}

build(platform);
