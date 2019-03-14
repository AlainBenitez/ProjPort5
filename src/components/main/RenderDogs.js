import React, { Component } from 'react';
// import Axios from 'axios';

const baseDogUrl =  'https://dog.ceo/api/breeds/image/random/10';
// const dogBreedUrl =  'https://dog.ceo/api/breed/';
// const endDogBreedUrl = 'images/random';
// const baseCatUrl = 'https://thecatapi.com/v1/images';
// const baseCatUrlApi = 'https://thecatapi.com/v1/images?api_key=0dcefba8-f377-4fae-a681-e7ff90e31932';


class RenderDogs extends Component {
    
    state = {
        imgArr: []      
    }

    buildDogAPI = () => {
        let url = baseDogUrl;
        let imgs = [];
        let num = 1;
        fetch(url).then(response => response.json())
            .then((resResults) => {
                console.log(resResults);
                console.log('Dog api results below.');

                resResults.message.forEach(element => {
                    imgs.push(element);
                    console.log(num++ + '. ' + element)
                
                });
                
                this.setState({imgArr: imgs})
                // console.log(imgs);
                // imgArr = imgs;
                // console.log(imgArr);
            });
        }

        // buildCatAPI = () => {
        //     let url = baseCatUrl;
        //     let imgs = [];
        //     let num = 1;
        //     // let apiKey = {'x-api-key': '0dcefba8-f377-4fae-a681-e7ff90e31932'}
        //     fetch(url, {headers: {'x-api-key': '0dcefba8-f377-4fae-a681-e7ff90e31932'}, mode: 'no-cors'}).then(response => response.json())
        //         .then(function(resResults) {
        //             console.log(resResults);
        //             console.log('Cat api results below.');
    
        //             resResults.message.forEach(element => {
        //                 imgs.push(element);
        //                 console.log(num++ + '. ' + element)
                    
        //             });
                    // console.log(imgs);
                    // imgArr = imgs;
                    // console.log(imgArr);
                // });

                // axios.defaults.headers.common['x-api-key'] = '0dcefba8-f377-4fae-a681-e7ff90e31932';
                // axios.get(url).then(response => response.json())
                // .then(function(resResults) {
                //     console.log(resResults);
                //     console.log('Cat api results below.');
                // });
            // }

        componentDidMount() {
            this.buildDogAPI();
            // this.buildCatAPI();
        }

        
        render() {
            
            return (
                <div>
                    {<p>Dog api response</p>}
                    {this.state.imgArr.map((e, i) => {
                        return (
                            <p key={i}>{++i + '. ' + e}</p>
                        )
                    })}
                    
                </div>
    );
}


}

export default RenderDogs;