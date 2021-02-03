import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import wordMap from "Src/wordMap";
import classes from "Sass/mainLayout.module.sass"
import Setting from 'Components/setting'


const Trainer = () => {
  const [ ans, setAns ] = useState('ans')
  const [ word, setWord ] = useState('text')
  const [ keys, setKeys] = useState([])
  const [ selectedList, setSelectedList ] = useState([])
  const [ isAnsShow, setIsAnsShow ] = useState(false)


  // useEffect(()=> {
  //   const keys = Object.keys(wordMap)
  //   console.log('keys', keys)
  //   setKeys(keys)
  //   // console.log('xx', xx)
  //   // nextClick()
  //   // cb()
  //   // init()

  // }, [])

  // useEffect(()=> {
  //   nextClick()
  //   console.log('key upup')
  // }, [keys])

  // useEffect(()=> {
  //   console.log('xxx')

  // }, [selectedList])

  const nextClick = () => {
    if(selectedList.length === 0) {
      return
    }
    const index = Math.floor(Math.random() * selectedList.length)
    // console.log('index', index)
    const key = selectedList[index]
    // console.log('key', key)
    const data = wordMap[key]
    // console.log('data', data)
    setWord(data.pen)
    setAns(data.roi)
    setIsAnsShow(false)
  }

  const showAnsClick = () => {
    setIsAnsShow(true)
  }

  const soundClick = () => {
    // console.log('eee', audioElement)
    // audioElement.current.play()
    const sound = new Audio(`learn50/${ans}.mp3`)
    sound.play()
  }

  return (
    <div className={classes.trainerLayout}>
      <div className={classes.wordWrapper}>{word}</div>
      <div className={classes.btnWrapper}>
        <Button onClick={nextClick}>next</Button>
        <Button onClick={showAnsClick}>ans</Button>
        <Button onClick={soundClick}>sound</Button>
      </div>
      <div className={classes.ansWrapper}>the ans is: {isAnsShow && ans}</div>
      {/* <div className={classes.ansWrapper}>the ans is: {isAnsShow && ans}</div> */}
      <Setting setSelectedList={setSelectedList} selectedList={selectedList}></Setting>
    </div>
  )
}

export default Trainer