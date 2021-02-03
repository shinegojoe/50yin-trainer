import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import wordMap from "Src/wordMap";
import classes from "Sass/mainLayout.module.sass"
import Setting from 'Components/setting'
import Logo from 'Src/images/character.png'
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';




const Trainer = () => {
  const [ ans, setAns ] = useState('???')
  const [ word, setWord ] = useState('???')
  const [ keys, setKeys] = useState([])
  const [ selectedList, setSelectedList ] = useState([])
  const [ isAnsShow, setIsAnsShow ] = useState(true)
  const [target, setTarget ] = useState({})


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
    setAns('???')
    setTarget(data)
    // setIsAnsShow(false)
  }

  const showAnsClick = () => {
    // setIsAnsShow(true)
    setAns(target.roi)
  }

  const soundClick = () => {
    // console.log('eee', audioElement)
    // audioElement.current.play()
    const sound = new Audio(`learn50/${target.roi}.mp3`)
    sound.play()
  }

  return (
    <div className={classes.trainerLayout}>
      <div className={classes.titleText}>50音訓練君</div>      
      <img className={classes.imgWrapper} src={Logo}></img>

      <div className={classes.wordWrapper}>{word}</div>
      <div className={classes.btnWrapper}>
        {/* <Button onClick={nextClick}>next</Button> */}
        <IconButton onClick={nextClick}>
          <PlayCircleFilledWhiteIcon className={classes.iconWrapper} />
        </IconButton>
        <IconButton onClick={showAnsClick}>
          <QuestionAnswerIcon className={classes.iconWrapper}/>
        </IconButton>
        <IconButton onClick={soundClick}>
          <VolumeUpIcon className={classes.iconWrapper}/>
        </IconButton>
        {/* <Button onClick={showAnsClick}>ans</Button> */}
        {/* <Button onClick={soundClick}>sound</Button> */}
      </div>
      <div className={classes.ansWrapper}>the ans is: {ans}</div>
      {/* <div className={classes.ansWrapper}>the ans is: {isAnsShow && ans}</div> */}

      {/* <div className={classes.ansWrapper}>the ans is: {isAnsShow && ans}</div> */}
      <Setting setSelectedList={setSelectedList} selectedList={selectedList}></Setting>
    </div>
  )
}

export default Trainer