"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyBugs = void 0;
const azure_devops_node_api_1 = require("azure-devops-node-api");
const authHandler = (0, azure_devops_node_api_1.getPersonalAccessTokenHandler)(process.env.ADO_TOKEN || "");
const connection = new azure_devops_node_api_1.WebApi("https://dev.azure.com/organization", authHandler);
const getMyBugs = (username) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const query = `\
  SELECT [System.Id]
  FROM WorkItems
  WHERE [System.WorkItemType] = 'Bug'
  AND [System.State] = 'Active'
  AND [System.AssignedTo] = ${username}`;
    const workItem = yield connection.getWorkItemTrackingApi("project");
    const results = yield workItem.queryByWiql({ query });
    if (!results) {
        return [];
    }
    return (_a = results.workItems) === null || _a === void 0 ? void 0 : _a.map((item) => {
        return {
            url: item.url,
        };
    });
});
exports.getMyBugs = getMyBugs;
await (0, exports.getMyBugs)();
