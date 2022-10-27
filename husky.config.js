module.exports = {
  hooks: {
    'commit-msg  --no-verify': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'pre-push --no-verify': 'npm run-script test:ci',
  },
};
