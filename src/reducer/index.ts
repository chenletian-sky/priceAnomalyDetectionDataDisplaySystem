import { combineReducers } from 'redux'
import { ACCEPTGLOBALDATA, TEMPTACTION } from '../types/actionTypes'
import { MainStoreType, StoreType } from '../types/propsTypes'


const initStore:StoreType = {
  Main:{
    data:{}
  }
}

const MainReducer = (state:MainStoreType = initStore.Main,action:any) => {
  if(action.type === ACCEPTGLOBALDATA){
    const {data} = action
    // console.log("reducer main",data)
    return {
      ...state,
      data
    }
  }
  // else if
  return state
}

const combineReducer = combineReducers({
  Main:MainReducer
})

const Reducer = (state:StoreType,action:any) => {
  return state
}

const reducer = (state:StoreType=initStore,action:any) => {
  const store1:StoreType = combineReducer(state,action)
  const store2:StoreType = Reducer(store1,action)
  return store2
}

export default reducer