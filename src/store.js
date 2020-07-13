// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import sortReducer from './reducers/sortReducer'
import platformReducer from './reducers/platformReducer'
import filterReducer from './reducers/filterReducer'
import searchReducer from './reducers/searchReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  sort: sortReducer,
  platform: platformReducer,
  filters: filterReducer,
  search: searchReducer,
  user: userReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
