import {ScrollView, View,Text,StyleSheet} from 'react-native';
import React from 'react';
import Graphs from './Graphs';
import Graphs2 from './Graphs2';


export default class ChartScreen extends React.Component {
    render(){
        return(
            <>
            <View style={styles.container}>
            <Text>Line Chart</Text>
            </View>
            <ScrollView>
                <View>
                    <Graphs/>
                </View>
                <View style={styles.container}>
            <Text>Pie Chart</Text>
            </View>
                <View>
                    <Graphs2 />
                </View>
            </ScrollView>
            </>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
        
    }});

