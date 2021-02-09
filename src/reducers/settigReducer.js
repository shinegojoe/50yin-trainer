import wordMap from "Src/wordMap.js"
import { settingString } from "Src/actionString"

const initialState = {
  wordList: [],
  selectedList: []
}

const wordInit = (state, action) => {
  const newState = {...state}
  newState.wordList = Object.keys(wordMap)
  // console.log('newState', newState)
  return newState
}

const addWord = (state, action) => {
  const newState = {...state}
  let newArr = null
    const word = action.word
    if(state.selectedList.includes(word)) {
      // remove
      newArr = state.selectedList.filter((item, index)=> {
        return item !== word
      })
    } else {
      newArr = [...state.selectedList]
      console.log(newArr)
      newArr.push(word)
    }
  newState.selectedList = newArr
  return newState
}


const settingReducer = (state = initialState, action) => {
  // console.log('action', action)
  // console.log('sss', settingString)
  switch(action.type) {

    case settingString().wordInit:
      return wordInit(state, action)
    case settingString().addWord: 
      return addWord(state, action)
    default:
      return state
  }
}

export default settingReducer