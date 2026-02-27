"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const node_util_1 = require("node:util");
const ado_1 = require("./ado");
const args = process.argv.slice(2);
const bugOpts = {
    username: {
        short: "u",
        type: "string",
    }
};
const { values } = (0, node_util_1.parseArgs)({
    args,
    options: bugOpts,
    allowPositionals: true
});
if (values.username && typeof values.username === "string") {
    const bugs = await (0, ado_1.getMyBugs)(values.username);
    await promises_1.default.writeFile("./bugs.json", JSON.stringify(bugs, null, 2));
}
