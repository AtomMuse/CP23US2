<script setup></script>

<template>
	<div class="gallery" @mousemove="move">
		<span style="--i: 1"
			><NuxtLink to="/d-day/cookify"
				><img src="~/assets/imgs/posterIT62-BU10.png" /></NuxtLink
		></span>
		<span style="--i: 2"><img src="~/assets/imgs/posterIT62-BU11.gif" /></span>
		<span style="--i: 3"><img src="~/assets/imgs/posterIT62-BU12.jpg" /></span>
		<span style="--i: 4"><img src="~/assets/imgs/posterIT62-BU13.jpg" /></span>
		<span style="--i: 5"><img src="~/assets/imgs/posterIT62-BU14.png" /></span>
		<span style="--i: 6"><img src="~/assets/imgs/posterIT62-BU15.jpg" /></span>
		<span style="--i: 7"><img src="~/assets/imgs/posterIT62-BU17.png" /></span>
		<span style="--i: 8"><img src="~/assets/imgs/posterIT62-BU19.gif" /></span>
	</div>
</template>

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
	cursor: pointer;
}
</style>

<!-- reference
https://www.youtube.com/watch?v=-grU-a2Of1s
-->
