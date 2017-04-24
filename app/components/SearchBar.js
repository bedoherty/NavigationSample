import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button } from 'react-native';

import ShadowedButton from 'react-native-shadowedbutton';

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#115ca7',
        flexDirection: 'row',
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
        flexGrow: 1,
        paddingLeft: 5,
    },
    searchButton: {
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    searchButtonFont: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Brandon Grotesque',
    }
});

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: ''};
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.searchInput} 
                    onChangeText={(text) => this.setState({searchQuery: text})}
                />
                <ShadowedButton
                    onPress={this.props.onSearch}
                    style={ styles.searchButton }
                    fontStyle = {styles.searchButtonFont}
                    color="#f05926"
                    title="Test Button"
                    shadowHeight={10}
                />
            </View>
        );
    }
};
