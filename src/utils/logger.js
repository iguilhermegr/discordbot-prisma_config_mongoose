const chalk = require('chalk');

const info = (message) => {
  return `${chalk.bold.blueBright(message)}`;
};

const error = (message) => {
  return `${chalk.bold.bgRed(message)}`;
};

const success = (message) => {
  return `${chalk.bold.green(message)}`;
};

const warning = (message) => {
  return `${chalk.bold.yellow(message)} `;
};

const bold = (message) => {
  return `${chalk.bold(message)}`;
};

const getTime = (date) => {
  return chalk.bold.gray(
    `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  );
};

module.exports = { info, error, success, warning, bold, getTime };
