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

    // Make a request to the Put.io API
    async request(endpoint, method, data) {

        let payload = {
            method: method || 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': window.Laravel.csrfToken
            }
        };

        if(data) payload.body = JSON.stringify(data);

        let json = await fetch(endpoint, payload)
            .then(response => response.json());

        if(json.message && json.type) {
            let notification = new Notification(json.message);
            notifier.push(notification);
        }

        return json;
    }

}

// Contruct the singleton
const putioKit = new PutioKit;

// Exports
export default putioKit;
export { File } from './models/File';