const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less-modules");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  config = injectBabelPlugin(
    ["transform-decorators-legacy", { legacy: true }],
    config
  );
  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
    // modifyVars: {"@primary-color": "#1890ff"}
  })(config, env);
  config = rewireReactHotLoader(config, env);
  return config;
};
