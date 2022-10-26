import { ref } from 'vue'

const useCounter = ( initialValue = 1 ) => {
	const counter = ref(initialValue)

		return {
			counter,
			// methods
			increase: () => counter.value++,
			decrease: () => counter.value--
		}
}


export default useCounter