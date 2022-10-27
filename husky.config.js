module.exports = {
  hooks: {
    'commit-msg  --no-verify': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run-script test:ci',
  },
};
