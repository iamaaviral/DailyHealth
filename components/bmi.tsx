import React from 'react';
import {
     StyleSheet,
     Text,
     View
} from 'react-native';


    //  var bmi = Math.round((data.weight / (data.height * data.height))*100)/100;
export default class Bmi extends React.Component {
	render() {
		return (
			<View style={styles.bmi}>
				<Text style={styles.bmi_text}>Your BMI : </Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	bmi: {
		flex: 2,
		flexDirection: 'column',
		alignSelf: 'stretch',
        justifyContent: "center",
		backgroundColor: 'rgba(0,170,170,0.1)'
	},
	bmi_text: {
		fontWeight: 'bold',
		fontSize: 18,
	}
});