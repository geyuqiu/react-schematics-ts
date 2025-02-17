import {
  Rule,
  apply,
  url,
  template,
  mergeWith,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
import * as path from "path";

export interface ComponentOptions {
  path: string;
  name: string;
}

export function generateComponent(options: ComponentOptions): Rule {
  return () => {
    const normalizedPath = options.path
      ? path.normalize(options.path)
      : ".";

    const finalPath = path.join(
      normalizedPath,
      strings.classify(options.name)
    );

    const templateSource = apply(url("../files/react"), [
      template({ ...strings, ...options }),
      move(finalPath)
    ]);

    return mergeWith(templateSource);
  };
}
