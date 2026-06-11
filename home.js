const images=["restaurant-1948732_1920.webp","ai-generated-elegant-dining-setup-with-gourmet-dishes-in-a-restaurant-photo.jpeg","wismar-die-besten-restaurants-in-wismar-eine-kulinarische-1769271219456.png"];
let index =0;
function next(){
    index++;

     if (index >= images.length) {
    index = 0;
  }

  slider.src = images[index];
}
setInterval(next,2000)