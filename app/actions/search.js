export function setSearchResultsLoading(isLoading) {
    return {
        type: "SEARCH_RESULTS_LOADING",
        isLoading: isLoading
    };
}

export function setSearchResults(searchResults) {
    return {
        type: "SEARCH_RESULTS_LOADED",
        searchResults
    }
}