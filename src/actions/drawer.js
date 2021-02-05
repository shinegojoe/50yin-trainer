

export const setXX = (val) => {
  return {
    type: 'setX',
    val: val
  }
}

export const setYY = (val) => {
  return {
    type: 'setY',
    val: val
  }
}

export const actionMDown = (e, canvas) => {
  return {
    type: 'mDown',
    e: e,
    canvas
  }
}

export const actionMUp = (e, canvas) => {
  return {
    type: 'mUp',
    e: e,
    canvas
  }
}

export const actionMMove = (e, canvas, ctx) => {
  return {
    type: 'mMove',
    e: e,
    canvas,
    ctx
  }
}

