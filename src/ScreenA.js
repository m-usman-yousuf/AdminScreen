import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    styleSheet

} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';


export default function ScreenA({ navigation }) {


    const graders = ['Ali', 'Ahmad', 'Awais', 'Sajid', 'Raja G', 'sh0kii', 'Parizad', 'Gulfam', 'Noman'];
    const teachers = ['Naseer', 'Munir', 'Shaihid', 'Ehsan', 'Ahsan', 'Shafiq', 'M0hib', 'Awan'];
    const subjects = ['OOP', 'PF', 'CN', 'CCN', 'DSA', 'JAVA', 'AA', 'LA', 'CA', 'EC',];

    const [pickerValue, setPickerValue] = useState(pickerValue)
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Subjects</Text>
            <Picker

                style={styles.pickerCustomeStyle}
                selectedValue={pickerValue}
                onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
            >
                {subjects.map((item, index) => {
                    return (<Picker.Item label={item} value={index} key={index} />)
                })}
            </Picker>



            <View style={{ flexDirection: 'row' }} >
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Teacher</Text>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, marginTop: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 60 }}>Grader</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: 300 }}>

                <FlatList

                    data={teachers}
                    renderItem={(teacher) => {
                        return (
                            <View style={styles.listItem}>
                                <Text style={{ color: '#FFFFFF' }}>{teacher.item}</Text>
                            </View>
                        );
                    }}
                />

                <FlatList

                    data={graders}
                    renderItem={(teacher) => {
                        return (
                            <View style={styles.listItem}>
                                <Text style={{ color: '#FFFFFF' }}>{teacher.item}</Text>
                            </View>
                        );
                    }}
                />


            </View>






        </View >
    );
}

const styles = StyleSheet.create({
    container: {

        marginTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerCustomeStyle: {
        height: 10,
        width: 150,
        color: "white",
        backgroundColor: '#287737',

        justifyContent: "center"
    },
    listItem: {
        backgroundColor: '#287737',
        margin: 10,
        padding: 10,
        flex: 1


    }




});