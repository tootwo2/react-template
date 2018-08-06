const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less-modules");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      "import",
      { libraryName: "antd", libraryDirectory: "es", style: "css" },
      "transform-decorators-legacy"
    ],
    config
  );
  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
    // modifyVars: {"@primary-color": "#1890ff"}
  })(config, env);
  return config;
};
