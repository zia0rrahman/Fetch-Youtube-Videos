import React, { Component } from 'react'

// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

// Youtube api URL: https://developers.google.com/youtube/v3/docs/search

const API = 'AIzaSyCkBhVlMLpJp02A6X_w0agVCSL3nJZsdjY'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 20

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class Youtube extends Component {
    constructor(props){
        super(props)

        this.state = {
            resultyt: []
        }
    }


    // load videos without clicking the button
    componentDidMount(){
        // this code grave from faceook networking react native - https://facebook.github.io/react-native/docs/network

        // fetching youtube video json
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
        // console.log(responseJson);
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);

            this.setState({
                resultyt
            });
      })
      .catch((error) => {
        console.error(error);
      });
    }


    /*
    // load videos when clicked the button

    clicked = () => {
        // this code grave from faceook networking react native - https://facebook.github.io/react-native/docs/network

        // fetching youtube video json
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
        // console.log(responseJson);
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);

            this.setState({
                resultyt
            });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    */


  render() {
    return (
      <div>
          {/* <button onClick={this.clicked}>Get Youtube Videos</button> */}

          {
                this.state.resultyt.map((link, index) => {
                    var frame = ( <div className="Youtube" key={index}><iframe title="This is a test video" width="560" height="315" src={link} 
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe></div>)

                    return frame
                })
          }


      </div>
    )
  }
}

export default Youtube
