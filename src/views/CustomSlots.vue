<template>
	<h1>Aprendiendo Slots</h1>
	<button>Abrir modal</button>

	<modal>
		<template v-slot:header>
			<h1>Titulo del Modal</h1>
			<hr>
		</template>

		<template v-slot:footer>
			<button>Cerrar</button>
		</template>

		<template v-slot:body>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus.</p>
		</template>
	
	</modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
	components: { Modal },
	setup() {

	}
}
</script>

<style scoped>

</style>