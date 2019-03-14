import React, { Component } from 'react';
// import './main.css';
import RenderDogs from './RenderDogs';

// const baseDogUrl =  'https://dog.ceo/api/breeds/image/random/10';
// const dogBreedUrl =  'https://dog.ceo/api/breed/';
// const endDogBreedUrl = 'images/random';
// let imgArr = [];


class Main extends Component {

// api calls for Dogs
// (n) number of random dogs
// https://dog.ceo/api/breeds/image/random/(n)
// 1 random dog image
// https://dog.ceo/api/breeds/image/random
// 1 random image of specific breed e.g hound
// https://dog.ceo/api/breed/hound/images/random
// 1 random image of a sub-breed e.g afgan hound
// https://dog.ceo/api/breed/hound/afghan/images/random
// 

  render() {
    return (
      <div>
        <RenderDogs />
        
      </div>
    );
  }
}

export default Main;

// const styles = {
//   container: {
//     width: '90%'
//   },
//   p: {
//     color: 'blue'
//   },
//   button: {
//     width: '100px',
//     height: '25px',
//     margin: '1rem',
//     padding: '3px 6px',
//     borderRadius: '8px'
//   }
// }