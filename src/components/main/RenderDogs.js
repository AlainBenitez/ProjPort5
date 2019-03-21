import React, { Component } from 'react';


const baseDogUrl =  'https://dog.ceo/api/breeds/image/random/10';
// const dogBreedUrl =  'https://dog.ceo/api/breed/';
// const endDogBreedUrl = 'images/random';

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
                // console.log(imgArr);
            });
        }

        componentDidMount() {
            this.buildDogAPI();
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