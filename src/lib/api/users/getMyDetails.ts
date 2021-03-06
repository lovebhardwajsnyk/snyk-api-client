import getUrl from '../../utils/getUrl';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

/**
 * GET: Request to fetch the user details
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/my-user-details/get-my-details
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getMyDetails(opts: ReqOpts = {}): Promise<ReturnData> {
  const endpoint = getUrl.getMyDetails;

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
