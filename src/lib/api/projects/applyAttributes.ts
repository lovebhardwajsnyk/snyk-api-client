import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Apply attributes to a Snyk project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-attributes/applying-attributes
 * @param data { orgId, projectId } Snyk org ID and project ID
 * @param opts { requestBody } Request body to apply the attributes
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.applyAttributes(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
