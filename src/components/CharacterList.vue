<template>
	<div class="list">
		<b-row>
			<ListItem v-bind:key="character.id" v-for="character in characterList" 
			:character="character"
			/>
		</b-row>
	</div>
</template>

<script type="text/javascript">
	import ListItem from './ListItem.vue'
	import MarvelService from '../services/MarvelService.js'

	export default {
		name: 'CharacterList',
		data(){
			return {
				characterList: []
			}
		},
		mounted () {
			MarvelService.getCharacters().then(characters => this.characterList = characters)
		},
		components: {
			ListItem
		}
	}
</script>