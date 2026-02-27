import { getPersonalAccessTokenHandler, WebApi } from "azure-devops-node-api";

const authHandler = getPersonalAccessTokenHandler(process.env.ADO_TOKEN || "");
const connection = new WebApi("https://dev.azure.com/organization", authHandler);

export const getMyBugs = async (username: string) => {
  const query = `\
  SELECT [System.Id]
  FROM WorkItems
  WHERE [System.WorkItemType] = 'Bug'
  AND [System.State] = 'Active'
  AND [System.AssignedTo] = ${username}`

  const workItem = await connection.getWorkItemTrackingApi("project");
  const results = await workItem.queryByWiql({ query });

  if (!results) {
    return [];
  }
  
  return results.workItems?.map((item) => {
    return {
      url: item.url,

    }
  });
};

await getMyBugs("jcreamer");