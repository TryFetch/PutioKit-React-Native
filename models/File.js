import PutioKit from '../index';

export class File {

    // The file ID
    id = 0

    // The display name of the file
    name;

    // The size of the file in bytes
    size = 0;

    // The metatype of file
    contentType;

    // Does the file have an MP4?
    hasMp4 = false

    // The ID of the parent folder (if there is one)
    parentId = 0

    // Whether the file has been access or not
    accessed = false

    // URL string of a screenshot
    screenshot;

    // Whether the file has been shared with you or if you own it
    isShared = false

    // Seconds that the file should be started from
    startFrom = 0

    // Reference to parent file
    parent;
    
    // The timestamp when the file was created
    createdAt;

    // Link to an HLS playlist that allows for streaming on Apple devices easily
    get hlsPlaylist() {
        const { accessToken } = PutioKit;
        if(!accessToken) return null;
        // TODO: Return the URL to the HLSPlaylist
    }
    
    // Whether the file is a directory or not
    get isDirectory() {
        const { contentType } = this;
        return (contentType == 'application/x-directory');
    }

    constructor(json) {
        if(json.id) this.id = json.id;
        if(json.name) this.name = json.name;
        if(json.is_shared) this.isShared = json.is_shared;
        if(json.is_mp4_available) this.hasMp4 = true;
        if(json.parent_id) this.parentId = json.parent_id;
        if(json.size) this.size = json.size;
        if(json.content_type) this.contentType = json.content_type;
        if(json.first_accessed_at) this.accessed = true;
        if(json.created_at) this.createdAt = json.created_at; // TODO: change this to a JS date object for easy formatting later
        if(json.screenshot) this.screenshot = json.screenshot;
        if(json.start_from) this.startFrom = json.start_from;
    }

    async rename(name) {
        
    }

    async getProgress() {

    }

    async convertToMp4() {

    }

    async getMp4Status() {

    }

    async share(friends) {

    }

    async unshare(friends) {

    }

    async delete() {

    }

    async move(to) {

    }

    async getSharedWith() {

    }

    async getSubtitles() {

    }

    async setPosition(position) {

    }

    async deletePosition() {

    }

}

export default File;