// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import sortReducer from './reducers/sortReducer'
import platformReducer from './reducers/platformReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  sort: sortReducer,
  platform: platformReducer,
  filters: filterReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(),
)

export default store
