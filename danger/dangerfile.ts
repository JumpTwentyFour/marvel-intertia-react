/**
 * BEFORE EDITING THIS FILE, PLEASE READ http://danger.systems/js/usage/culture.html
 *
 * This file is split into two parts:
 * 1) Rules that require or suggest changes to the code, the PR, etc.
 * 2) Rules that celebrate achievements
 */
import { danger, fail, message, warn } from 'danger'

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Required or suggested changes                                          ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const newFiles = danger.git.created_files
const updatedFiles = danger.git.modified_files
const branchPrefixPattern = /^(feature|hotfix|release)/
const branchName = danger.bitbucket_cloud.pr.source.branch.name


/**
 * Rule: Ensure the PR body contains a link to the Jira ticket.
 * Reason: It's the most efficient way to jump from Github to Jira to update the
 *         ticket.
 */
if (danger.bitbucket_cloud.pr.description.length < 10) {
  warn('Please include a description of your PR changes.')
}

/**
 * Rule: Ensure the branch name prefix is either feature, hotfix or release
 * Reason: All branches should start with one of the three to follow our Git Flow pattern.
 */
if (!branchPrefixPattern.test(branchName)) {
  fail(`Incorrect branch prefix used. Please use Feature, Hotfix or Release.`)
}

/**
 * Rule: Ensure the package lock file is committed when the package.json is updated
 * Reason: The package lock must always be generated from the package json file
 */
const packageJson = danger.git.fileMatch('package.json')
const packageLock = danger.git.fileMatch('package-lock.json')
if (packageJson.modified && !packageLock.modified) {
  warn('This PR modified package.json, but not package-lock.json')
}

/**
 * Rule: Ensure a PR does not contain more than x files
 * Reason: We should be creating small PRS
 */
if (newFiles.length > 10) {
  warn('Please avoid creating a PR with so many new files.')
}

/**
 * Have unit tests been updated
 */
const unitTests = require('./unitTests')
unitTests.run([...newFiles, ...updatedFiles], warn)

const cypressTests = require('./cypressTests')
cypressTests.run([...newFiles, ...updatedFiles], warn)

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Achievements                                                            ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const documentation = danger.git.fileMatch('**/*.md')

if (documentation.edited) {
  message('Thank you for updating the documentation :smile:')
}
