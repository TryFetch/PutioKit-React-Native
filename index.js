import File from './models/File';

// The main class for PutioKit
class PutioKit {

    base = "https://api.put.io/v2";

    /// The client ID used for OAuth Authentication
    clientId;

    /// The access token used by the user to authorise requests
    accessToken;
    
    /// The redirect URI registered with Put.io
    redirectUri;
    
    // The url used for authentication by PutioKit
    get authenticationUrl() {
        const { clientId, redirectUri } = this;
        if(!clientId || !redirectUri) return null;
        return base + `/oauth2/authenticate?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`
    }

}

// Contruct the singleton
const putioKit = new PutioKit;

// Exports
export default putioKit;
export { File } from './models/File';