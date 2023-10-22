import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../../collection.json");

describe("component-gen", () => {
  it("react schematics works", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = runner.runSchematic(
      "react",
      { path: "src/components", name: "Header" },
      Tree.empty()
    );

    expect(tree.files).toEqual([
      "/src/components/Header/Header.test.tsx",
      "/src/components/Header/Header.tsx",
    ]);
  });
});
