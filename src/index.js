import './css/style.styl'
import Carousel from './js/Carousel.js'
import image from './images/image.jpg'
import fonts from './fonts/heboo-bold.woff2'

console.log('Hello coucou');

const $image = new Image()
$image.src = image
document.body.appendChild($image)

const carousel = new Carousel()