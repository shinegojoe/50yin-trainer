import React, { useRef, useState, useEffect, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import classes from "Sass/drawerLayout.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setXX, setYY, actionMDown, actionMUp, actionMMove } from "Src/actions/drawer";



const HandWrite = () => {
  const canvasEle = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [ctx, setCtx] = useState(null)

  const dispatch = useDispatch()
  let xx = useSelector((state)=>{
    // console.log('sssss', state)
    return state.drawer.x
  })

  let yy = useSelector((state)=>{
    // console.log('sssss', state)
    return state.drawer.y
  })

  useEffect(()=> {
    console.log(canvasEle.current)
    canvasEle.current.width = 360
    canvasEle.current.height = 360
    const _ctx = canvasEle.current.getContext('2d')
    console.log('ctx', _ctx)
    _ctx.strokeStyle = '#000000'
    _ctx.lineWidth = 2
    // _ctx.beginPath()
    // _ctx.moveTo(0, 100)
    // _ctx.lineTo(100, 200)
    // _ctx.stroke()
    setCtx(_ctx)
  }, [])

  const clearClick = () => {
    // console.log(canvasEle.current)
    ctx.clearRect(0, 0, 360, 360)
  }

  /*
    for redux
    const mDown = (e)=> {
      setIsDrawing(true)
      const action = actionMDown(e, canvasEle.current)
      return dispatch(action)
    }

    const mMove = (e)=> {
      if(isDrawing) {
        const action = actionMMove(e, canvasEle.current, ctx)
        return dispatch(action)
      }
    }
  */

  const mDown = (e) => {
    setIsDrawing(true)
    const newX = e.clientX - canvasEle.current.offsetLeft
    const newY = e.clientY - canvasEle.current.offsetTop
    setX(newX)
    setY(newY)
  }

  const mMove = (e) => {
    if(isDrawing) {
      const newX = e.clientX - canvasEle.current.offsetLeft
      const newY = e.clientY - canvasEle.current.offsetTop
      // console.log('new', newX, newY)
      ctx.beginPath()
      ctx.moveTo( x, y)
      ctx.lineTo( newX, newY)
      ctx.stroke()
      setX(newX)
      setY(newY)
    }
  }

  const mUp = () => {
    setIsDrawing(false)
  }

  const mLeave = () => {
    setIsDrawing(false)
  }

  const touchStart = (e) => {
    setIsDrawing(true)
    const newX = e.clientX - canvasEle.current.offsetLeft
    const newY = e.clientY - canvasEle.current.offsetTop
    setX(newX)
    setY(newY)

  }

  const touchMove = (e) => {
    if(isDrawing) {
      const newX = e.clientX - canvasEle.current.offsetLeft
      const newY = e.clientY - canvasEle.current.offsetTop
      // console.log('new', newX, newY)
      ctx.beginPath()
      ctx.moveTo( x, y)
      ctx.lineTo( newX, newY)
      ctx.stroke()
      setX(newX)
      setY(newY)
    }
  }

  const touchEnd = () => {
    setIsDrawing(false)
  }

  const test = useCallback(()=> {
    const action = setXX(100)
    return dispatch(action)
  }, [dispatch])

  return (
    <div className={classes.drawerLayout}>
      <canvas 
        ref={canvasEle}
        className={classes.canvasWrapper} 
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        onMouseLeave={mLeave}
        onMouseMove={mMove}
        onMouseUp={mUp}
        onMouseDown={mDown} >
      </canvas>
      <Button onClick={clearClick}>clear</Button>
    </div>
  )
}

export default HandWrite