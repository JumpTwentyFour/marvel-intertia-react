/**
 * BEFORE EDITING THIS FILE, PLEASE READ http://danger.systems/js/usage/culture.html
 *
 * This file is split into two parts:
 * 1) Rules that require or suggest changes to the code, the PR, etc.
 * 2) Rules that celebrate achievements
 */
import { danger, fail, warn } from 'danger'

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Required or suggested changes                                          ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/**
 * Rule: Exactly 1 reviewer is required.
 * Reason: No reviewer tends to leave a PR in a state where nobody is
 *         responsible. Similarly, more than 1 reviewer doesn't clearly state
 *         who is responsible for the review.
 */
const reviewersCount = danger.bitbucket_cloud.pr.reviewers.length
if (reviewersCount === 0) {
  fail(`🕵 Whoops, I don't see any reviewers. Remember to add one.`)
} else if (reviewersCount > 1) {
  warn(
    `It's great to have ${reviewersCount} reviewers. Remember though that more than 1 reviewer may lead to uncertainty as to who is responsible for the review.`,
  )
}

/**
 * Rule: Ensure the PR title contains a Jira ticket key.
 * Reason: When looking at the list of PRs, seeing the Jira ticket in the PR
 *         title makes it very efficient to know what to look at.
 */
const prTitle = danger.bitbucket_cloud.pr.title
const ticketPattern = /MP-\d+/g
if (!ticketPattern.test(prTitle)) {
  fail(`🔍 I can't find the Jira ticket number in the PR title.`)
}

/**
 * Rule: Ensure the PR body contains a link to the Jira ticket.
 * Reason: It's the most efficient way to jump from Github to Jira to update the
 *         ticket.
 */
const prDescription = danger.bitbucket_cloud.pr.description
const ticketUrlPattern = /https:\/\/jumptwentyfour\.atlassian\.net\/browse\/MP-(\d+)/g
if (!ticketUrlPattern.test(prDescription)) {
  fail(`🔍 I can't find the Jira ticket URL in the PR body.`)
}

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
const branchPrefixPattern = /^(feature|hotfix|release)/
const branchName = danger.bitbucket_cloud.pr.source.branch.name

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
 * Rule: Ensure the tests folder is updated when application code changes
 * Reason: We should be following test driven development
 */
const reactFiles = danger.git.fileMatch('resources/**/*.js', '!**.spec.js')
const testFiles = danger.git.fileMatch('resources/**/*.spec.js')

if (reactFiles.created && !testFiles.created) {
  warn('This PR added JS code in resources/ but had no accompanying tests.')
} else if (
  (reactFiles.created || reactFiles.modified) &&
  !testFiles.created &&
  !testFiles.modified
) {
  warn(
    'This PR modified JS code in resources/ but had no accompanying test changes.',
  )
}

/**
 * Rule: Ensure a PR does not contain more than x files
 * Reason: We should be creating small PRS
 */
const newFiles = danger.git.created_files.length

if (newFiles > 10) {
  warn('Please avoid creating a PR with so many new files.')
}

/**
 * Rule: Ensure the .env file is not committed to projects
 * Reason: It should never be committed
 */
const envFile = danger.git.fileMatch('/^.env$/')
if (envFile) {
  fail('Please do not commit the env file to GIT')
}

/**
 * Rule: Ensure an NVMRC file is committed to JS projects
 * Reason: It ensures a consistent version of NPM for each user
 */
const nvmrcFile = danger.git.fileMatch('.nvrmrc')
if (!nvmrcFile) {
  warn('Please commit an NVMRC file is a JS project')
}


/**
 * Rule: Ensure a PR does not exceed the character threshold
 * Reason: We should be creating small PRS
 */
// const bigPRThreshold = 600
// if (
//   danger.bitbucket_cloud.pr.source + danger.bitbucket_cloud.pr.deletions >
//   bigPRThreshold
// ) {
//   warn('Big pull request, please keep small to make it easier to review')
// }

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Achievemnts                                                            ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
