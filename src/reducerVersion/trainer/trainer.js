import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import classes from "Sass/mainLayout.module.sass"
import Logo from 'Src/images/character.png'
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import wordMap from "Src/wordMap";
import Setting from "Src/reducerVersion/trainer/setting";
import { trainerString } from 'Src/actionString'
import { StarRateTwoTone } from '@material-ui/icons';


const Trainer = () => {

  const dispatch = useDispatch()

  const word = useSelector((state)=> {
    return state.trainer.word
  })

  const ans = useSelector((state)=> {
    return state.trainer.ans
  })

  const selectedList = useSelector((state)=> {
    return state.setting.selectedList
  })

  const nextClick = () => {
    const action = {
      type: trainerString.playNext,
      selectedList
    }
    dispatch(action)
  }

  const showAnsClick = () => {
    const action = {
      type: trainerString.showAns
    }
    dispatch(action)
  }

  const soundClick = () => {
    const action = {
      type: trainerString.playSound
    }
    dispatch(action)
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

      {/* {isBoardOn && <HandWrite></HandWrite>} */}
      <Setting></Setting>
    </div>
  )
}

export default Trainer