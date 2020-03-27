import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const TodoListItem = ({ todo, onPressTodo, onLongPressTodo, onLongPressDelete }) => (
	
	<TouchableOpacity
		onPress={onPressTodo}
		onLongPress={onLongPressTodo}>
		<View style={styles.line}>
			<Text style={[
				styles.lineText,
				todo.done ? styles.lineThrough : null
			]}>
				{ todo.text }
			</Text>
	
			<Button style={styles.right} onPress={onLongPressDelete}
				title={<Ionicons name="ios-trash" color="#fff" size={30} />} 
				/>
		</View>

	</TouchableOpacity>
);



const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",

		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
	lineThrough: {
		textDecorationLine: 'line-through'
	},
	right: {
		alignItems: 'flex-end',
		flex: 1,
	  },
});

export default TodoListItem;