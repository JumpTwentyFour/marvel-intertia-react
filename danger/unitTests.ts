/**
 * Danger message warning.
 * @constant
 * @type {String}
 * @default
 */
const MESSAGE = `<b>What about unit tests?</b> - <i>
It seems like you made some changes to a react component, but you did not update/add any tests.
</i> 🤔`

/**
 * Return true if test file found.
 */
const reactComponentTestFound = (files) =>
  files.some((file) => /resources\/js\/__tests__\/Components\/.+(.tsx?)$/g.test(file))

/**
 * Return true if .ts/.tsx/ react components found.
 */
const reactComponentFound = (files) =>
  files.some((file) => /resources\/js\/Components\/.+(.tsx?)$/g.test(file))

/**
 * Warn in case no unit tests added/updated.
 * @param {String[]} files - list of modified files.
 * @param {Function} warn - danger warn.
 * @returns {Promise<undefined>}
 */
const run = async(files, warn) => {
  if (!files) {
    return
  }

  if (!Array.isArray(files)) {
    return
  }

  if (files.length === 0) {
    return
  }

  if (!reactComponentTestFound(files) && reactComponentFound(files)) {
    warn(MESSAGE)
  }
}

module.exports = {
  MESSAGE,
  run,
}
