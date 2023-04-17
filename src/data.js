import fimg from './assets/France.png';
import jimg from './assets/Japan.png';
import kimg from './assets/Korea.png';

import lelouch from './assets/lelouch.png';
import denma from './assets/denma.png';
import vegana from './assets/vegana.png';

import fk1img from './assets/susanoo_main.jpg';
import fk2img from './assets/izanagiizanami_main.jpg';
import fk3img from './assets/bamboo_main.jpg';

import Pl1img from './assets/tokyo.png';
import Pl2img from './assets/sensoji.png';
import Pl3img from './assets/akiba.png';

import Sushiimg from './assets/sushi.png';
import Ramenimg from './assets/ramen.png';
import Udonimg from './assets/udon.png';

import Jp1img from './assets/places_main.png';
import Jp2img from './assets/cuisine_main.png';
import Jp3img from './assets/dragon.png';
import Jp4img from './assets/culture_main.png';

import Sadoimg from './assets/sado.png';
import Hanamiimg from './assets/hanami.png';
import Ikebanaimg from './assets/ikebana.png';


const navlinks = ["About", "Contact Us"];

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

const fk1 = {
    description: "Discover the legend of Susanoo, the powerful Shinto god of storms and the sea. Banished from heaven for his unruly behavior, Susanoo descended to earth and encountered a fierce dragon,Yamata-no-Orochi. With the help of a clever plan and his own strength, Susanoo battled the dragon to save avillage and earn his place among the gods.",
    name: "Susanoo",
    image: fk1img
}
const fk2 = {
    description: "Join Izanagi, the powerful god of creation in Japanese mythology, on his perilous journey to Yomi, the land of the dead. Discover how he sought to rescue his beloved wife Izanami and the terrible consequences that ensued. Explore this haunting tale of love, loss, and the boundaries between life and death.",
    name: "Izanagi and Izanami",
    image: fk2img
}
const fk3 = {
    description: "Experience the magical world of The Tale of the Bamboo Cutter, a beloved Japanese folktale. Follow the journey of a mysterious princess discovered inside a bamboo stalk and raised by a humble bamboo cutter and his wife. Explore the trials and tribulations of a life caught between two worlds in this enchanting story of love, loss, and destiny.",
    name: "The bamboo cutter",
    image: fk3img
}
const folklores = [fk1, fk2, fk3];



const Jp1 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Places of Japan",
    image: Jp1img,
    link: "places"
}
const Jp2 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Cuisines of Japan",
    image: Jp2img,
    link: "cuisines"
}
const Jp3 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Folklores of Japan",
    image: Jp3img,
    link: "folklore"
}
const Jp4 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Cultures of Japan",
    image: Jp4img,
    link: "cultures"
}
const japanPage = [Jp1, Jp2, Jp3, Jp4];



const Cs1 = {
    description: "Sushi is a traditional Japanese dish that consists of vinegared rice combined with a variety of toppings, such as seafood, vegetables, and egg. It is served with soy sauce, wasabi, and pickled ginger, and has become a popular cuisine worldwide due to its history, artistry, and unique flavors.",
    name: "Sushi",
    image: Sushiimg
}
const Cs2 = {
    description: "Ramen is a popular Japanese dish consisting of Chinese-style wheat noodles served in a meat or fish-based broth, flavored with soy sauce, miso, or salt, and topped with various ingredients such as sliced pork, dried seaweed, and green onions. It is a staple food in Japan and has gained popularity worldwide for its unique taste and versatility.",
    name: "Ramen",
    image: Ramenimg
}
const Cs3 = {
    description: "Udon is a staple food in Japanese cuisine, made of thick wheat flour noodles commonly served in a soup broth with various toppings like tempura, meat, vegetables, and tofu. Its chewy texture is prized by many and can be found in various dishes like stir-fries, salads, and hot pots. It is enjoyed by people of all ages in Japan and worldwide.",
    name: "Udon",
    image: Udonimg
}
const cuisines = [Cs1, Cs2, Cs3];


const Cl1 = {
    description: "Sadō, also known as the Japanese tea ceremony, is a traditional cultural activity that involves the ceremonial preparation and presentation of powdered green tea. It has deep roots in Japanese history and is often seen as a symbol of Japanese culture, emphasizing the principles of harmony, respect, purity, and tranquility.",
    name: "Sadō",
    image: Sadoimg
}
const Cl2 = {
    description: "Hanami is a Japanese tradition of enjoying the beauty of cherry blossom trees. People often have picnics and parties under the blooming trees during the spring season. It is a symbol of the transience of life and is deeply ingrained in Japanese culture, representing renewal and new beginnings.",
    name: "Hanami",
    image: Hanamiimg
}
const Cl3 = {
    description: "Ikebana is the Japanese art of flower arrangement, which emphasizes simplicity, asymmetry, and the use of natural materials. It is a traditional cultural practice that has been around for centuries and is deeply ingrained in Japanese culture. Ikebana is often seen as a form of meditation and is widely practiced in Japan as well as around the world as a way to bring beauty and harmony into the home or workplace.",
    name: "Ikebana",
    image: Ikebanaimg
}
const cultures = [Cl1, Cl2, Cl3];


const Place1 = {
    description: "Tokyo Tower is a must-see attraction in Tokyo, Japan. With its 333-meter-high observation deck, visitors can enjoy panoramic views of the city, while also exploring the shops, restaurants, and aquarium located within the tower. Its iconic design and central location make it a favorite destination for tourists and locals alike.",
    name: "Tokyo Tower",
    image: Pl1img
}
const Place2 = {
    description: "Senso-ji Temple, located in Asakusa, Tokyo, is the city's oldest Buddhist temple and a major cultural landmark. Visitors can admire the temple's stunning architecture, including the Kaminarimon Gate and five-story pagoda, as well as participate in various traditional activities such as fortune-telling and street food.",
    name: "Senso-ji Temple",
    image: Pl2img
}
const Place3 = {
    description: "Osaka is a lively city in Japan known for its food culture and vibrant nightlife. The city is home to historical landmarks such as Osaka Castle, as well as modern attractions like Universal Studios Japan. With its friendly locals and bustling atmosphere, Osaka is a great destination for those looking for an exciting urban experience.",
    name: "Akihabara",
    image: Pl3img
}
const places = [Place1, Place2, Place3];

export {locations, testimonials, folklores, japanPage, cuisines, cultures, places, navlinks};