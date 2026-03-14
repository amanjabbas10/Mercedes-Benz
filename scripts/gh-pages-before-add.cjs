const fs = require('node:fs');
const path = require('node:path');

module.exports = async function beforeAdd(git) {
  const attributesPath = path.join(git.cwd, '.gitattributes');
  const gitIgnorePath = path.join(git.cwd, '.gitignore');

  await fs.promises.rm(attributesPath, { force: true });
  await fs.promises.rm(gitIgnorePath, { force: true });
};
