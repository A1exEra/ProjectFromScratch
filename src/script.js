/* eslint-disable no-console */
import './styles/styles.scss';
import img from './assets/images/sandro.jpeg';

console.log('God Of Code');

const heading = document.querySelector('#heading');
const image = document.querySelector('#image');
image.src = img;
heading.innerHTML = 'God Of Code';
