import { trainerString } from "Src/actionString"
import wordMap from "Src/wordMap"


const initState = {
  word: '???',
  ans: '???',
  data: undefined
}


const playNext = (state, action) => {
  if(action.selectedList.length === 0) {
    return state
  }
  const index = Math.floor(Math.random() * action.selectedList.length)
  const key = action.selectedList[index]
  const data = wordMap[key]
  console.log('play next', data)
  const newState = {...state}
  newState.data = data
  newState.word = data.pen
  newState.ans = '???'
  return newState
}

const showAns = (state, action) => {
  const newState = {...state}
  newState.ans = state.data.roi
  return newState
}

const playSound = (state, action) => {
  console.log('ppp', state)
  if(state.data) {
    const sound = new Audio(`learn50/${state.data.roi}.mp3`)
    sound.play()
  }
  return state
}

const fnMap = new Map()
fnMap.set(trainerString.playNext, playNext)
fnMap.set(trainerString.showAns, showAns)
fnMap.set(trainerString.playSound, playSound)


const TrainerReducer = (state = initState, action) => {
  // console.log('action', action)
  const fn = fnMap.get(action.type)
  if(fn) {
    return fn(state, action)
  } else {
    return state
  }
}

export default TrainerReducer