import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

export default async (
  orgId: string,
  projectId: string,
  ignoreId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  const endpoint = getUrl.deleteIgnore(orgId, projectId, ignoreId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
