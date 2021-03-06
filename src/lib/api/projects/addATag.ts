import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';
import isObjectEmpty from '../../utils/isObjectEmpty';

/**
 * POST: Add a tag to a project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-tags/add-a-tag-to-a-project
 * @param data { orgId, projectId } Snyk org ID and project ID
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.addTag(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
