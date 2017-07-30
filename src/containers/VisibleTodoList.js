import {connect} from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import{toggleTodo} from '../actions/todoActions';


const mapStateToProps = state =>({
    todos:state.todos
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;