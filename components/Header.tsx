import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component<any,any> {

	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>Daily health</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 50,
		paddingBottom: 20,
		backgroundColor: 'rgba(0,170,170,0.1)'
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center'
	}
});