export default function Counter(state = 0, action) {
  switch (action.type) {
	case 'INCREMENT':
	  console.log(state)
	  return state + action.payload
	case 'DECREMENT':
	  console.log(state)
	  return state - action.payload
	default:
	  return state
  }
}