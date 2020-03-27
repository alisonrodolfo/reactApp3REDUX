import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { setTodoText, addTodo, updateTodo, deleteTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
	onChangeText(text) {
		this.props.dispatchSetTodoText(text);
	}

	onPress() {
		const { todo } = this.props;
		if (todo.id && todo.text != "") {
			console.log("vazio" + todo.text);
			return this.props.dispatchUpdateTodo(todo);
		} else if (todo.id && todo.text == "") {
			this.props.dispatchDeleteTodo(todo.id);
		}
		const { text } = todo;
		if (text != "") {
			this.props.dispatchAddTodo(capitalize(text));
		}
	}

	render() {
		const { text, id } = this.props.todo;
		return (
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<Input
						onChangeText={text => this.onChangeText(text)}
						value={text}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						onPress={() => this.onPress()}
						title={id ? "save" : "add"}
					/>
				</View>
			</View>
		);
	}
}

const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

const styles = StyleSheet.create({
	formContainer: {
		flexDirection: 'row',
		
	},
	inputContainer: {
		flex: 4,
		borderWidth: 2,  // size/width of the border
		borderColor: 'lightgrey',  // color of the border
		
	},
	buttonContainer: {
		flex: 1
	}
});

// const mapDispatchToProps = dispatch => {
// 	return {
// 		dispatchAddTodo: text => dispatch(addTodo(text))
// 	}
// }

const mapStateToProps = state => {
	return {
		todo: state.editingTodo
	}
}

export default connect(
	mapStateToProps,
	{
		dispatchSetTodoText: setTodoText,
		dispatchAddTodo: addTodo,
		dispatchUpdateTodo: updateTodo,
		dispatchDeleteTodo: deleteTodo
	}
)(TodoForm);