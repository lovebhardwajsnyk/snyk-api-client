const BASE_URL = 'https://snyk.io/api/v1';
// const BASE_URL = 'https://google.com';
// const BASE_URL = 'https://googley.com';
export { BASE_URL };
import getQueryString from '../utils/getQueryString';

export default {
  getUserDetails: (userId: string): string => {
    return `user/${userId}`;
  },
  getMyDetails: `user/me`,
  getOrgNotiSettings: (orgId: string): string => {
    return `user/me/notification-settings/org/${orgId}`;
  },
  modOrgNotiSettings: (orgId: string): string => {
    return `user/me/notification-settings/org/${orgId}`;
  },
  getProjNotiSettings: (orgId: string, projectId: string): string => {
    return `user/me/notification-settings/org/${orgId}/project/${projectId}`;
  },
  modProjNotiSettings: (orgId: string, projectId: string): string => {
    return `user/me/notification-settings/org/${orgId}/project/${projectId}`;
  },
  getGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  upGroupSeetings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  listGroupMembers: (groupId: string): string => {
    return `group/${groupId}/members`;
  },
  addMemGroupOrg: (groupId: string, orgId: string): string => {
    return `group/${groupId}/org/${orgId}/members`;
  },
  getGroupTags: (groupId: string, pageSize: number, pageNo: number): string => {
    return `group/${groupId}/tags?perPage=${pageSize}&page=${pageNo}`;
  },
  getAllProjects: (orgId: string): string => {
    return `org/${orgId}/projects`;
  },
  getSingleProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  updateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  deleteProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  deactivateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/deactivate`;
  },
  activateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/activate`;
  },
  getAggIssues: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/aggregated-issues`;
  },
  getProjDepGraph: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/dep-graph`;
  },
  listAllIgnores: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/ignores`;
  },
  retrieveIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  addIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  replaceIgnores: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  deleteIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  listAllJiraIssues: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/jira-issues`;
  },
  createJiraIssue: (orgId: string, projectId: string, issueId: string) => {
    return `org/${orgId}/project/${projectId}/issue/${issueId}/jira-issue`;
  },
  listProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  updateProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  deleteProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  moveProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/move`;
  },
  addTag: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/tags`;
  },
  removeTag: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/tags/remove`;
  },
  applyAttributes: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/attributes`;
  },
  viewGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  updateGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  listMembersInGroup: (groupId: string): string => {
    return `group/${groupId}/members`;
  },
  addMemberToOrgInGroup: (groupId: string, orgId: string): string => {
    return `group/${groupId}/org/${orgId}/members`;
  },
  listAllTagsInGroup: (groupId: string, queryPrams?: { perPage?: number; page?: number }): string => {
    return queryPrams!! ? `group/${groupId}/tags?${getQueryString(queryPrams)}` : `group/${groupId}/tags`;
  },
  deleteTagFromGroup: (groupId: string): string => {
    return `group/${groupId}/tags/delete`;
  },
  listOrgs: (): string => {
    return 'orgs';
  },
  createNewOrg: (): string => {
    return 'orgs';
  },
  getOrgsNotiSettings: (orgId: string): string => {
    return `org/${orgId}/notification-settings`;
  },
  setOrgsNotiSettings: (orgId: string): string => {
    return `org/${orgId}/notification-settings`;
  },
  inviteUserToOrg: (orgId: string): string => {
    return `org/${orgId}/invite`;
  },
  listOrgMembers: (orgId: string, queryParams: { includeGroupAdmins?: boolean }): string => {
    return queryParams!! ? `org/${orgId}/members?${getQueryString(queryParams)}` : `org/${orgId}/members`;
  },
  viewOrgSettings: (orgId: string): string => {
    return `org/${orgId}/settings`;
  },
  updateOrgSettings: (orgId: string): string => {
    return `org/${orgId}/settings`;
  },
  updateMemberRole: (orgId: string, userId: string): string => {
    return `org/${orgId}/members/${userId}`;
  },
  removeMemberFromOrg: (orgId: string, userId: string): string => {
    return `org/${orgId}/members/${userId}`;
  },
  removeOrg: (orgId: string): string => {
    return `org/${orgId}`;
  },
};
