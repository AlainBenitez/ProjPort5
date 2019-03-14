import React, { Component } from 'react';
import axios from 'axios';

const baseDogUrl =  'https://dog.ceo/api/breeds/image/random/10';
const dogBreedUrl =  'https://dog.ceo/api/breed/';
const endDogBreedUrl = 'images/random';
const baseCatUrl = 'https://thecatapi.com/v1/images';
const baseCatUrlApi = 'https://thecatapi.com/v1/images?api_key=0dcefba8-f377-4fae-a681-e7ff90e31932';

let imgArr = [];

class RenderDogs extends Component {

    buildDogAPI = () => {
        let url = baseDogUrl;
        let imgs = [];
        let num = 1;
        fetch(url).then(response => response.json())
            .then(function(resResults) {
                console.log(resResults);
                console.log('Dog api results below.');

                resResults.message.forEach(element => {
                    imgs.push(element);
                    console.log(num++ + '. ' + element)
                
                });
                // console.log(imgs);
                imgArr = imgs;
                // console.log(imgArr);
            });
        }

        buildCatAPI = () => {
            let url = baseCatUrl;
            let imgs = [];
            let num = 1;
            let apiKey = {'x-api-key':'0dcefba8-f377-4fae-a681-e7ff90e31932'}
            // fetch(url, {headers: apiKey, mode: 'no-cors'}).then(response => response.json())
            //     .then(function(resResults) {
            //         console.log(resResults);
            //         console.log('Cat api results below.');
    
                    // resResults.message.forEach(element => {
                    //     imgs.push(element);
                    //     console.log(num++ + '. ' + element)
                    
                    // });
                    // console.log(imgs);
                    // imgArr = imgs;
                    // console.log(imgArr);
                // });

                axios.defaults.headers.common['x-api-key'] = '0dcefba8-f377-4fae-a681-e7ff90e31932';
                axios.get(url).then(response => response.json())
                .then(function(resResults) {
                    console.log(resResults);
                    console.log('Cat api results below.');
                });
            }

        
        render() {
            
            return (
                <div>
                    {this.buildDogAPI()}
                    {this.buildCatAPI()}
                    <p style={styles.p}>{imgArr[0]}</p>
                    <p>{imgArr[1]}</p>
                    <p>{imgArr[2]}</p>
                    <p>{imgArr[3]}</p>
                    <p>{imgArr[4]}</p>
                    <p>{imgArr[5]}</p>
                    <p>{imgArr[6]}</p>
                    <p>{imgArr[7]}</p>
                    <p>{imgArr[8]}</p>
                    <p>{imgArr[9]}</p>
                    
                </div>
    );
}


}
export default RenderDogs;


const styles = {
    p: {
      backgroundColor: 'blue'
    }
}