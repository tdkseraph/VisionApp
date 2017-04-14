// implement api with image (uploaded to imhur and already have url) example
// photo : https://i.imgur.com/NjPYa4x.jpg

const info = {
    API: 'AIzaSyABj84DFx-pNUrVRQAvrmAJzmUbGZin4Rg',
    URL:'https://vision.googleapis.com/v1/images:annotate?fields=responses&key='
}

const keywords = ["LANDMARK_DETECTION", "LOGO_DETECTION", "WEB_DETECTION", "TEXT_DETECTION", "LABEL_DETECTION"];


export const google = {
    async getImageAnalysis(imageUri,category = "") {
        console.log('get Google data');
        let features = generatePayload(category);
        let image = {
            source: {
                imageUri: imageUri,
            }
        };
        
        let requests = {
            image: image,
            features: features
        }
        var data = await fetch(info.URL + info.API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({requests: requests})
        }).then((items) => {
            console.log('finished');
            return items.json()
        });

        return data;
    }
}

function generatePayload(category) {
    var categories = [];
    if (category){
        categories.push(category);
    } else {
        categories = keywords;
    }

    let payload = [];
    for (var i = 0; i < categories.length; i++) {
        var maxResult = 30;
        if (categories[i] === "TEXT_DETECTION")
        {
            maxResult = 1000;
        }
        
        payload.push({type: categories[i], maxResults: maxResult});
    }
    return payload;
}
