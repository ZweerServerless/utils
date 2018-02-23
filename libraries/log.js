const levels = {
  critical: 0,
  error: 1,
  warn: 2,
  info: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

function doLog(level, logger, message, meta = {}) {
  if (!message) {
    message = logger; // eslint-disable-line no-param-reassign
    logger = 'default'; // eslint-disable-line no-param-reassign
  }

  const logObj = Object.assign({
    level,
    levelIndex: levels[level],
    logger,
    message,
  }, meta);

  console.log(JSON.stringify(logObj)); // eslint-disable-line no-console
}

const log = {};

Object.keys(levels).forEach((level) => {
  log[level] = (logger, message, meta) => doLog(level, logger, message, meta);
});

export default log;
