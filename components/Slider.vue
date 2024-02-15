<template>
	<div class="gallery" @mousemove="move">
		<span
			v-for="(image, index) in imageList"
			:key="index"
			:style="`--i: ${index + 1}`"
		>
			<img :src="image" />
		</span>
	</div>
</template>
<script setup>
const imageList = ref([
	'/imgs/posterIT62-BU10.png',
	'/imgs/posterIT62-BU11.gif',
	'/imgs/posterIT62-BU12.jpg',
	'/imgs/posterIT62-BU13.jpg',
	'/imgs/posterIT62-BU14.png',
	'/imgs/posterIT62-BU15.jpg',
	'/imgs/posterIT62-BU17.png',
	'/imgs/posterIT62-BU19.gif'
])
</script>
<style scoped>
.gallery {
	position: relative;
	width: 225px;
	height: 125px;
	transform-style: preserve-3d;

	animation: animate 50s linear infinite;
	animation-play-state: running;
}

@keyframes animate {
	0% {
		transform: perspective(1000px) rotateY(0deg);
	}
	100% {
		transform: perspective(1000px) rotateY(360deg);
	}
}

.gallery:hover {
	animation-play-state: paused;
}

span {
	position: absolute;
	/* top: 0; */
	/* left: 0; */
	width: 100%;
	height: 100%;
	transform-origin: center;
	transform-style: preserve-3d;
	transform: rotateY(calc(var(--i) * 45deg)) translateZ(300px);
	-webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);
}

span img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* border-radius: 10px; */
	object-fit: contain;
	/* cursor: pointer; */
}
</style>

<!-- reference
https://www.youtube.com/watch?v=-grU-a2Of1s
-->
