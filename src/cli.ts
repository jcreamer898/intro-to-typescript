import fs from "node:fs/promises";
import { parseArgs, ParseArgsConfig } from "node:util";
import { getMyBugs } from "./ado";

const args = process.argv.slice(2);

const bugOpts: ParseArgsConfig["options"] = {
  username: {
    short: "u",
    type: "string",
  }
};

const { values } = parseArgs({
    args,
    options: bugOpts,
    allowPositionals: true
});

if (values.username && typeof values.username === "string") {
  const bugs = await getMyBugs(values.username);

  await fs.writeFile("./bugs.json", JSON.stringify(bugs, null, 2));
}
