#!/bin/sh

# Define functions
includeCLIBin() {
  cp -rf src/bin build/bin
}

bundleSourceCode() {
  rm -rf build
  npm run build
}

increasePatchVersion() {
  npm version patch
}

clonePackageJson() {
  cp -rf package.json build/package.json
}

publishPackage() {
  npm publish build
}

# Main
bundleSourceCode && increasePatchVersion && clonePackageJson && publishPackage
