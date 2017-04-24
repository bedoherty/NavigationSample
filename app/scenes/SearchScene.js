import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { setSearchResultsLoading, setSearchResults } from '../actions/search';

import SearchBar from '../components/SearchBar';

const styles = StyleSheet.create({
});

class SearchScene extends Component {
    render() {
        return (
            <View>
                <SearchBar 
                    onSearch={this.doSearch}
                />
                {this.props.searchResultsLoading ?
                    (<Text>Still Loading</Text>)
                    :
                    (
                        <FlatList
                            data={this.props.searchResults}
                            renderItem={({item}) => <Text>{item.acronym}</Text>}
                            keyExtractor={(item, index) => item.acronym}
                        />
                    )
                }
            </View>
        );
    }   

    doSearch = (searchQuery) => {
        this.props.setSearchResultsLoading(true);
        fetch('https://api.myjson.com/bins/9aib3', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJson) => {
            var relevantResults = responseJson.filter((result) => {return result.acronym.includes(searchQuery)});
            console.log(relevantResults);
            this.props.setSearchResults(relevantResults);
            this.props.setSearchResultsLoading(false);

        });
    };

    toggleLoading = () => {
        console.log("test3");
        var currValue = this.props.searchResultsLoading;
        this.props.setSearchResultsLoading(!currValue);
    };


};

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults,
        searchResultsLoading: state.searchResultsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchResultsLoading: (isLoading) => dispatch(setSearchResultsLoading(isLoading)),
        setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScene);
