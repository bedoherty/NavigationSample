export function searchResultsLoading(state = false, action = {}) {
    switch (action.type) {
        case 'SEARCH_RESULTS_LOADING':
            console.log(action.isLoading ? "True" : "False");
            return action.isLoading;
        default:
            return state;
    }
}

export function  searchResults(state = [], action = {})
{
    switch (action.type) {
        case 'SEARCH_RESULTS_LOADED':
            return action.searchResults;
        default:
            return state;
    }
}