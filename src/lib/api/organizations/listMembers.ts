import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (data: { orgId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.listOrgMembers(orgId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
