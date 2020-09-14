<template>
	<div class="list">
		<b-row>
			<ListItem v-bind:key="character"  v-for="character in characterList" 
			:character="character"
			/>
		</b-row>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import ListItem from './ListItem.vue'

	export default {
		name: 'CharacterList',
		data(){
			return {
				characterList: []
			}
		},
		mounted () {
			const numberList = [1,2,3,4,5,6,7];
			const pairs = numberList.filter(number => number % 2 != 0);
			const multiplied = pairs.map(number => number * 2);
			const sum = multiplied.reduce( (acum, value) => acum + value);
			console.log(sum);

			axios
			.get('http://gateway.marvel.com/v1/public/characters', {
				params: {
					apikey: 'c10e57b921370f043fe759c4aa7629a1',
					limit: 30
				}
			})
			.then(response => {
				this.characterList = response.data.data.results;
			})
		},
		components: {
			ListItem
		}
	}
</script>