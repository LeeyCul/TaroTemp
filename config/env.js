const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand').expand;

module.exports = {
  getEnvironment: function () {
    const envFilePath = path.join(process.cwd(), '.env');
    const NODE_ENV = process.env.NODE_ENV;
    // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
    const dotenvFiles = [
      `${envFilePath}.${NODE_ENV}.local`,
      `${envFilePath}.${NODE_ENV}`,
      // Don't include `.env.local` for `test` environment
      // since normally you expect tests to produce the same
      // results for everyone
      NODE_ENV !== 'test' && `${envFilePath}.local`,
      envFilePath,
    ].filter((item) => !!item);

    dotenvFiles.forEach((dotenvFile) => {
      if (fs.existsSync(dotenvFile)) {
        dotenvExpand(
          dotenv.config({
            path: dotenvFile,
          }),
        );
      }
    });
    // 注入所有开头的环境变量
    const prefix = /^HXGY_/i;
    const builtiEnv = {
      NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
      HXGY_APP: `"${process.env.TARO_ENV}"`,
    };
    const raw = Object.keys(process.env)
      .filter((key) => prefix.test(key))
      .reduce((env, key) => {
        env[key] = JSON.stringify(process.env[key]);
        return env;
      }, builtiEnv);
    return raw;
  },
};
