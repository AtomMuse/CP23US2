<template>
    <div class="w-full inline-flex flex-nowrap slider-container">
        <div class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none slider">
            <img v-for="(srcSet, index) in imageSrcSets" :key="index" :src="srcSet" alt="Slide" class="slide" />
        </div>
        <div class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none slider">
            <img v-for="(srcSet, index) in imageSrcSets" :key="index" :src="srcSet" alt="Slide" class="slide" />
        </div>
        <div class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none slider">
            <img v-for="(srcSet, index) in imageSrcSets" :key="index" :src="srcSet" alt="Slide" class="slide" />
        </div>
    </div>

</template>
  
<script>
export default {
    data() {
        return {
            imageSrcSets: [
                'https://blog.artweb.com/wp-content/uploads/2022/12/Van-Gogh-Starry-Night.jpg',
                'https://trendygallery.co.th/wp-content/uploads/2022/08/IMG_8528.jpg',
                'https://static.wixstatic.com/media/d6280e_c58a11db80fa4f4490e4c1b89232bd14~mv2.jpg/v1/fill/w_979,h_771,q_90/d6280e_c58a11db80fa4f4490e4c1b89232bd14~mv2.jpg',
                'https://i.pinimg.com/736x/6d/0f/55/6d0f55171fdc4d82a648126bb32425fd.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQrOGSl40K4xr3bgl1SCPrqtzI9UteECeNG48SscPRVggBPjPZxgmQ6ORc7iYoiadVY8&usqp=CAU',
                'https://rukminim2.flixcart.com/image/850/1000/jmp79u80/poster/b/6/x/medium-pop-art-cubism-poster-wall-art-poster-pgully-pgp1388-original-imaf9jfyt36zhnng.jpeg?q=20'
            ],
        };
    },
};
</script>
  
<style scoped>
.slider-container {
    width: 100%;
    height: 200px;
    margin: auto;
    overflow: hidden;
}

.slider {
    display: flex;
    animation: bannermove 15s linear infinite;
}

.slide {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 400px;
    height: 200px;
    margin-right: 20px;
    border-radius: 20px;
    transition: transform 1s ease;
}

@keyframes bannermove {

    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>
  