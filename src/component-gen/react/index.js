"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const path = require("path");
function generateComponent(options) {
    return () => {
        const normalizedPath = options.path
            ? path.normalize(options.path)
            : ".";
        const finalPath = path.join(normalizedPath, core_1.strings.classify(options.name));
        const templateSource = schematics_1.apply(schematics_1.url("../files/react"), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
            schematics_1.move(finalPath)
        ]);
        return schematics_1.mergeWith(templateSource);
    };
}
exports.generateComponent = generateComponent;
//# sourceMappingURL=index.js.map