import fimg from './assets/France.png';
import jimg from './assets/Japan.png';
import kimg from './assets/Korea.png';

import lelouch from './assets/lelouch.png';
import denma from './assets/denma.png';
import vegana from './assets/vegana.png';

const Japan = {
    title: "Japan",
    description: "Discover the ancient traditions, vibrant culture, and stunning natural beauty of Japan - a truly unforgettable travel experience.",
    image: jimg
}
const France = {
    title: "France",
    description: "Indulge in the art, cuisine, history, and romance of France - a dream destination for travelers seeking charm and sophistication.",
    image: fimg
}
const Korea = {
    title: "Korea",
    description: "Experience the dynamic blend of modern innovation and rich cultural heritage in Korea - a land of beauty, tradition, and adventure",
    image: kimg
}
const locations = [Japan, France, Korea];

const tst1 = {
    description: "A fun and educational way to travel from home - loved the immersive experience!",
    name: "-Denma,",
    status: "College Student",
    image: denma
}
const tst2 = {
    description: "Highly impressed with the website's authentic cultural representation.",
    name: "-Lelouch,",
    status: "College Student",
    image: lelouch
}
const tst3 = {
    description: "I've been able to explore new cultures and expand my horizons.",
    name: "-Vegana,",
    status: "College Student",
    image: vegana
}
const testimonials = [tst1, tst2, tst3];

export {locations, testimonials};