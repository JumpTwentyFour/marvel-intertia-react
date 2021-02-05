/**
 * Danger message warning.
 * @constant
 * @type {String}
 * @default
 */
const MESSAGE = `<b>What about cypress tests?</b> - <i>
It seems like you made some changes to a react page, but you did not update/add any cypress tests.
</i> 🤔`

/**
 * Return true if test file found.
 */
const cypressTestFound = (files) =>
  files.some((file) => /cypress\/integration\/.+(.spec.ts)$/g.test(file))

/**
 * Return true if .ts/.tsx/ react components found.
 */
const reactInertiaPageFound = (files) =>
  files.some((file) => /resources\/js\/Pages\/.+(.tsx?)$/g.test(file))

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

  if (!cypressTestFound(files) && reactInertiaPageFound(files)) {
    warn(MESSAGE)
  }
}

module.exports = {
  MESSAGE,
  run,
}
