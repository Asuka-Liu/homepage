import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: credentialedProxyHandler,
  allowedEndpoints: /\d\/quicklook|diskio|fs|gpu|system|mem|network|processlist|sensors/,
};

export default widget;
