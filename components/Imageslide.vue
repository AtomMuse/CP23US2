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
                'https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
                'https://www.travelandleisure.com/thmb/KTIha5CLifSoUD3gx0YP51xc3rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue0517-4dfc85cb0200460ab717b101ac07888f.jpg',
                'https://blog.hubspot.com/hs-fs/hubfs/colortheory_0.webp?width=650&height=433&name=colortheory_0.webp',
                'https://cdn11.bigcommerce.com/s-3uewkq06zr/products/258/images/543/fluorescent_pink__88610.1492541080.500.750.png?c=2',
                'https://assets.designhill.com/design-blog/wp-content/uploads/2017/08/colors.jpg',
            ],
        };
    },
};
</script>
  
<style scoped>
.slider-container {
    width: 100%;
    /* Adjust the width as needed */
    height: 200px;
    /* Adjust the height as needed */
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
    /* Adjust the width as needed */
    height: 200px;
    /* Adjust the height as needed */
    margin-right: 20px;
    border-radius: 20px;
    transition: transform 1s ease;
    /* Add a transition for smoother animation */
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
  