import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';

import {google} from '../api/googlevision.js'
import {imgur} from '../api/uploadphoto.js'
import RNFetchBlob from 'react-native-fetch-blob'

export default class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: ''
        }
    }

    async sendImageAndGetAnalysis() {
        // var result = await google.getImageAnalysis("WEB_DETECTION"); get specific data (1-5 types)
        var result = await google.getImageAnalysis('https://i.imgur.com/NjPYa4x.jpg'); //get all data (included 5 types)
        console.log(result);
    }

    async uploadImageByUrl() {
        let link = 'http://www.dusit.com/dusitthani/bangkok/wp-content/blogs.dir/12/files/rooms_supe' +
                'rior-room/dtbk_accommodation_superior-room.jpg';
        var success = await this.uploadImage('url', link);
    }

    async uploadImageByBase64() {
        //change to your folder which contains images that you want to upload
        let filePath = '/Users/seraph/Documents/Projects/iOS/VisionApp/Apps/resources/exam.jpg';
        var dataBase64 = await RNFetchBlob.fs.readFile(filePath, 'base64').then((data) => { return (data) })

        var success = await this.uploadImage('base64', dataBase64);
    }

    async uploadImage(type, content){
        let success = await imgur.upload(type, content)
            .then((result) => {
                if (result.success) {
                    this.setState({photoUrl: result.data.link})
                    return true
                } else {
                    this.setState({photoUrl: 'error'})
                    return false
                }
            });
    }

    render() {
        return (
            <View
                style={{
                alignItems: 'center',
                flex: 1
            }}>
                <Text style={{
                    paddingTop: 20
                }}>Take a photo</Text>
                <Text style={{
                    paddingTop: 20
                }}>Choose from library</Text>
                <Button
                    onPress={() => this.sendImageAndGetAnalysis()}
                    title="Test google-vision (see log)"/>
                <Button
                    onPress={() => this.uploadImageByUrl()}
                    title="Upload image to imgur by url"/>
                <Button
                    onPress={() => this.uploadImageByBase64()}
                    title="Upload image to imgur by local photo"/>
                <Text>{this.state.photoUrl}</Text>
            </View>
        )
    }
}
