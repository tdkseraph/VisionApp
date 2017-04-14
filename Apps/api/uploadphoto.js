// implement upload image to https://imgur.com/ API documents :
// https://api.imgur.com/endpoints/image

const info = {
    API: 'AIzaSyABj84DFx-pNUrVRQAvrmAJzmUbGZin4Rg',
    URL: 'https://api.imgur.com/oauth2/authorize?client_id=',
    clientID: '63a8eb6dd62841f'
}

const tokens = {
    clientID: "63a8eb6dd62841f",
    clientSecert: "a06bf631d836389b04f6fc3ffe0e8f70bc463cfc"
}

export const imgur = {
    async upload(type, content) {
        let requests = {
            image: content,
            type: type
        }
        console.log('start uploading');
        var data = await fetch('https://api.imgur.com/3/upload', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Client-ID '+ info.clientID 
            },
            body: JSON.stringify({image: content,type: type})
        }).then((items) => {
            console.log('finished');
            return items.json()
        });

        return data;
    }
}