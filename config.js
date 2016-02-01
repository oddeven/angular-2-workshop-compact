System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    src: {
      defaultJSExtensions: false,
      defaultExtension: 'ts'
    }
  },

  map: {
    "typescript": "npm:typescript@1.8.0"
  }
});
