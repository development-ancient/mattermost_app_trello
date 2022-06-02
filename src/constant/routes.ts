export const AppsPluginName = 'com.mattermost.apps';

const PathsVariable = {
  Identifier: ':IDENTIFIER'
}

const AppPaths = {
  ManifestPath: '/manifest.json',
  BindingsPath: '/bindings',
  InstallPath: '/install',

  BoardSelectPath: '/board_select',
  ListSelectPath: '/list_select',

  AddFormStepOnePath: '/add/stepone',
  AddFormStepTwoPath: '/add/steptwo',
  BindingPathCreateCard: '/create-card',

  Lookup: '/lookup',
  Form:  '/form',
  Submit: '/submit',
  Forms: '/forms',

  BindingPathHelp: '/help',
  BindingPathAdd: '/add',
  BindingPathNew: '/new',
  BindingPathLink: '/link',
  BindingPathConfigure: '/configure',
  
  CallPathConfigOpenForm: '/config/open-form',
  CallPathConfigSubmitOrUpdateForm: '/config/submit-or-update',
}

const MattermostPaths = {
  PathKV: '/kv',
  PostsPath: '/posts',
  PostPath: `/posts/${PathsVariable.Identifier}`,
  UserPath: `/users/${PathsVariable.Identifier}`,
  DialogsOpenPath: '/actions/dialogs/open',
  ApiVersionV4: '/api/v4',
  ApiVersionV1: '/api/v1',
  Hooks:  '/hooks',
}

const TrelloPaths = {
  OAuthGetRequestToken: '/OAuthGetRequestToken',
  OAuthAuthorizeToken: '/OAuthAuthorizeToken',
  OAuthGetAccessToken: '/OAuthGetAccessToken',
  OAuthAuthorizationURI: '/oauth/authorizations/new',
  OAuthAccessTokenURI: '/oauth/tokens',
  TicketPathPrefix: '/agent/tickets',
  AccessURI: '/access/unauthenticated',
  APIVersion: '/api/v2',
  getMembers: 'members/me'
};

export const Routes = {
  PathsVariable,
  App: AppPaths,
  Mattermost: MattermostPaths,
  TP: TrelloPaths
};

