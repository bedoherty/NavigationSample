import { combineReducers } from 'redux';
//  Import all individual reducers
import routes from './routes';
import { searchResults, searchResultsLoading } from './search'

const allReducers = combineReducers({
    //  All individual reducers go here
    routes,
    searchResults,
    searchResultsLoading,
});

export default allReducers;