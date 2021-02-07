import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, RequestOpts } from '../../../types/types';

export default async (data: { orgId: string; projectId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.deleteProjectSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
