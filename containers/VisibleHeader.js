import { connect } from 'react-redux'
import Header from '../components/Header'




// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     // todos: getVisibleTodos(state.todos, state.visibilityFilter)
//     x:2
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   	x:1
//     // onTodoClick: (id) => {
//     //   dispatch(toggleTodo(id))
//     // }
//   }
// }

//   // mapStateToProps,
//   // mapDispatchToProps
// // )(Header)
function mapStateToProps(state) {
  return { todos: state.todos }
}
export default connect(null, {a:1})(Header)




