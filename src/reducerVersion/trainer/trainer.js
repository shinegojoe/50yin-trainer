import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import classes from "Sass/mainLayout.module.sass"
import Logo from 'Src/images/character.png'
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CancelIcon from '@material-ui/icons/Cancel';
import Setting from "Src/reducerVersion/trainer/setting";
import { trainerString } from 'Src/actionString'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import "Sass/settingDialog.sass";


const Trainer = () => {

  const [ isDialogOn, setIsDialogOn] = useState(true)

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

  const handleDialog = (bool) => {
    setIsDialogOn(bool)
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
      {/* <Switch>setting</Switch> */}
      <FormControlLabel
          value="end"
          control={<Switch onChange={()=> {handleDialog(true)}} checked={isDialogOn} color="primary" />}
          label="setting"
          labelPlacement="end"
      />

      {/* {isBoardOn && <HandWrite></HandWrite>} */}
      <Dialog open={isDialogOn} aria-labelledby="simple-dialog-title">
        <div className={classes.dialogLayout}>
          <IconButton onClick={()=> {handleDialog(false)}}>
            <CancelIcon className={classes.iconWrapper}/>
          </IconButton>
          <Setting></Setting>
        </div>
        
      </Dialog>
    </div>
  )
}

export default Trainer