<template>
	<div class="w-full h-full">
		<div class="grid grid-cols-12 gap-5">
			<BlogHeaderSection
				:startDate="exhibition.startDate"
				:endDate="exhibition.endDate"
				:exhibitionName="exhibition.exhibitionName"
				:exhibitionDescription="exhibition.exhibitionDescription"
				class="col-start-4 col-span-6 py-16"
			/>
		</div>

		<SectionComponent
			v-for="(section, index) in exhibition.exhibitiontionSections"
			:key="index"
			:sectionInfo="section"
		/>
	</div>
</template>

<style scoped></style>
<script setup>
const exhibition = {
	exhibitionName: 'Hung Liu: Making History',
	exhibitionDescription:
		'Adapting motifs and symbols from Chinese visual and cultural traditions, as wel as antique photographs of Chinese society by Western observers, Liu transformed documentary-style photography into paonterly, personal reflections on canvas and paper.',
	startDate: '11 Nov 2023',
	endDate: '12 Dec 2023',
	isPublic: true,
	exhibitionCategories: ['Art'],
	exhibitionTags: ['woman art', 'life'],
	userId: {
		userId: 1,
		firstName: 'Somchai',
		lastName: 'Jaidee'
	},
	layoutUsed: 'blogLayout',
	exhibitiontionSections: [
		{
			sectionType: '1col',
			contentType: 'only background devider',
			background: 'image.jpg'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'image with description',
				image: 'image2.jpg',
				imageDescription:
					'Photograph of Hung Liu, ca. 1970 to 72; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			rightCol: {
				contentType: 'title and text',
				title: 'Hung Liu (1948 to 2021)',
				text:
					'Coming of age during Mao Zedong’s Cultural Revolution, Hung Liu (1948 to 2021) was profoundly affected by the plights         of the poor and oppressed. Photography played a critical role in the artist’s life and career, from candid shots that she took of villagers in the countryside to the 19th-century portraits of women that became source imagery for her works. She was even inspired by Dorothea Lange’s images of the American Dust Bowl. Liu’s own poetic imagery stirs a collective memory of her country while re-centering the narrative on the most vulnerable in society.'
			},
			background: 'bg-transparent'
		},
		{
			sectionType: '1col',
			contentType: 'background with title devider',
			background: 'image3.jpg',
			title: 'Portraits of Women'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'title and text',
				title: null,
				text:
					'Liu’s art has always focused on the human condition, particularly that of women under male-dominated regimes. Her archives of source materials include photographic portraits of empresses, mistresses, laborers, and migrant women. Many of these photographs were hidden in the Beijing Film Studio during the Cultural Revolution. Liu took snapshots of the photographs to bring the images back to the United States, where she had moved in 1984 to continue her art training.'
			},
			rightCol: {
				contentType: 'image with description',
				image: 'image4.jpg',
				imageDescription:
					'Unidentified photographer, Group of women, ca. 1900; Artist’s photograph of archival image, Collection of Hung Liu and Jeff Kelley; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			background: 'bg-transparent'
		},
		{
			sectionType: '3col',
			contentType: 'images shower',
			images: ['image5.jpg', 'image6.jpg', 'image7.jpg']
		},
		{
			sectionType: '1col',
			contentType: 'title and text with border devider',
			title: null,
			text:
				'For many of her portrayals of sex workers and courtesans, Liu worked from photographs of Chinese women posed in Western costumes and on stage sets that were dated around 1900. She discovered these photographs on a return visit to China in the 1990s. The attire, props, and backdrops indicate that the archival photographs were intended for Western and upper-class Chinese clientele, while Japanese captions on some of the photographs suggest that they were also meant for Japanese tourists in China.'
		},
		{
			sectionType: '1col',
			contentType: 'title and text with bg devider',
			title: 'Anonymous Faces',
			text: null,
			background: 'bg-transparent'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'image with description',
				image: 'image8.jpg',
				imageDescription:
					'Unidentified photographer, Woman seated on prop balustrade (inspiration for Shui-Water), ca. 1900; Artist’s photograph of archival image, Collection of Hung Liu and Jeff Kelley; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			rightCol: {
				contentType: 'image with description',
				image: 'image9.jpg',
				imageDescription:
					'Hung Liu, Shui-Water, 2012; Color aquatint etching with gold leaf on paper, 47 x 36 in.; National Museum of Women in the Arts, Gift of Steven Scott, Baltimore, in memory of the artist and in honor of the thirty-fifth anniversary of the National Museum of Women in the Arts; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York; Photo by Lee Stalsworth'
			},
			background: 'bg-transparent'
		},
		{
			sectionType: '1col',
			contentType: 'title and text with bg devider',
			title: null,
			text:
				'Shui Water is adapted from a historical photograph of a woman sitting on a railing and surrounded by flowerpots. Liu isolates the figure, placing her in front of a backdrop that evokes Chinese landscape paintings. Her body, layered under streaks of brown earth, may refer to the exploitation endured by working-class women.',
			background: 'bg-gray-300'
		},
		{
			sectionType: '1col',
			contentType: 'background with title devider',
			background: 'image10.jpg',
			title: 'People of the Cultural Revolution'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'image with description',
				image: 'image11.jpg',
				imageDescription:
					'Photograph of Hung Liu, ca. 1970 to 72; Collection of Hung Liu and Jeff Kelley; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			rightCol: {
				contentType: 'title and text',
				title: null,
				text:
					'In 1968, Liu was one of ten million urban youths sent to re-education camps in the countryside during Mao Zedong’s Cultural Revolution. She toiled in rice and wheat fields in Dadu Lianghe, a village approximately 50 miles outside of Beijing. She bonded with the other villagers and photographed them using a friend’s Karl Zeiss camera, despite restrictions on the use of the medium by the Chinese government.'
			},
			background: 'bg-transparent'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'title and text',
				title: 'A Closer Look: Bird Imagery',
				text:
					'Liu frequently includes birds in her works with various cultural connotations. Cranes were signs of good luck, serenity, and blessings while Mandarin ducks were considered symbols of love and devotion. Images of sparrows allude to Mao Zedong’s infamous 1958 Four Pests Campaign, which aimed to eradicate mosquitoes, flies, rats, and sparrows. One of the first actions of China’s Great Leap Forward, Chairman Mao’s plan for national economic reconstruction, the campaign led to ecological disasters and mass starvation.'
			},
			rightCol: {
				contentType: 'image with description',
				image: 'image12.jpg',
				imageDescription:
					'Hung Liu, Corn Carrier (detail), 1999; Oil on canvas, 80 x 70 in.; National Museum of Women in the Arts, Promised gift of Patti and Jerry Sowalsky; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			background: 'bg-transparent'
		},
		{
			sectionType: '2col',
			leftCol: {
				contentType: 'image with description',
				image: 'image13.jpg',
				imageDescription:
					'Hung Liu, Corn Carrier (detail), 1999; Oil on canvas, 80 x 70 in.; National Museum of Women in the Arts, Promised gift of Patti and Jerry Sowalsky; © 2023 Hung Liu Estate/Artists Rights Society (ARS), New York'
			},
			rightCol: {
				contentType: 'title and text',
				title: 'A Closer Look: Religious Symbols',
				text:
					'Other religious motifs in Liu’s compositions include Bodhisattva figures, lotus blossoms, as well as the recurrent use of circles, which refers to the Zen Buddhist philosophy of wholeness, emptiness, and the cycles of life. Liu incorporates these symbols as a way to accompany, guide, and protect the men, women, and children in her works.'
			},
			background: 'bg-gray-300'
		},
		{
			sectionType: '1col',
			contentType: 'title and text with bg devider',
			title: 'Village Photographs',
			text: null,
			background: 'bg-transparent'
		},
		{
			sectionType: '3col',
			contentType: 'images shower',
			images: ['image14.jpg', 'image15.jpg', 'image16.jpg']
		},
		{
			sectionType: '1col',
			contentType: 'title and text with border devider',
			title: 'Special Thanks',
			text:
				'This online resource was developed in collaboration with Dorothy Moss and the Hung Liu Estate.'
		}
	]
}
</script>
