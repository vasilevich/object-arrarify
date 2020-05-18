const path = require('path');
const fs = require('fs');
const UglifyJS = require("uglify-js");

const filePath = path.resolve("browser/index.js");
const file = fs.readFileSync(filePath).toString();
const code = file.split("export default ")[0];
const minifiedCode = UglifyJS.minify(code, {
    compress: {
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
    }
}).code;
fs.writeFileSync(filePath, code);
fs.writeFileSync(filePath.replace(".js", ".min.js"), minifiedCode);
