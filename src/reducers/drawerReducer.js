

const initialState = {
  x: 0,
  y: 0
}

const mUp = (state, action) => {
  return state
}

const mDown = (state, action) => {
  // console.log('e', action.e)
  const newX = action.e.clientX - action.canvas.offsetLeft
  const newY = action.e.clientY - action.canvas.offsetTop
  state.x = newX
  state.y = newY
  console.log(newX, newY)

  return state
}

const mMove = (state, action) => {
  // console.log('move', action)
  const newX = action.e.clientX - action.canvas.offsetLeft
  const newY = (action.e.clientY - action.canvas.offsetTop)
  // const newX = action.e.clientX - rect.left
  // const newY = action.e.clientY - rect.top
  console.log('old', state.x, state.y)
  console.log('new', newX, newY)

  action.ctx.beginPath()
  action.ctx.moveTo( state.x, state.y)
  // action.ctx.moveTo(0, 0)
  // action.ctx.moveTo(180, 0)


  action.ctx.lineTo( newX, newY)
  // action.ctx.lineTo( 360, 360)
  action.ctx.stroke()
  state.x = newX
  state.y = newY
  
  return state
}

const drawerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'mDown':
      return mDown(state, action)

    case 'mUp':
      return mUp(state, action)

    case 'mMove':
      return mMove(state, action)
    case 'setX':
      state.x = action.val
      return state
    case 'setY':
      state.y = action.val
      return state
    default:
      return state

  }
}

export default drawerReducer