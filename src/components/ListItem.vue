<template>
	<b-col sm="4" >
		<div class="item">
			<figure class="imghvr-blur">
				<img :src="CharacterImage" />
				<figcaption>
					<h5 class="item-title">{{ character.name }}</h5>
					<span>Comics: {{ character.comics.available }}</span>
					<span>Series: {{ character.series.available }}</span>
					<span>Stories: {{ character.stories.available }}</span>
					<p class="item-description">{{ character.description }}</p>
				</figcaption>
			</figure>
		</div>
	</b-col>
</template>

<script>
	
	export default {
		name: "ListItem",
		props: {
			character: Object,
		},
		computed: {
			CharacterImage: function(){
				return this.character.thumbnail.path + '.' + this.character.thumbnail.extension
			}
		}
	}
</script>


<style type="text/css">
	.list > div > div {
		padding: 20px 30px;
	}
	.item {
		height: 300px;
		border: 3px solid #fff;
		border-radius: 15px;
		margin: 10px 0 0 0
	}
	figcaption, figure {
		background: url('../assets/marvel_logo.jpg') center center;
		background-color: none !important;
		border-radius: 15px;
	}
	figure{
		background: transparent !important;
		background-color: none !important;
		width: 100%;
		height: 100%;
	}
	figcaption span{
		margin: 0 2px;
	}
	figcaption p{
		margin: 10px 0 !important;
	}
</style>