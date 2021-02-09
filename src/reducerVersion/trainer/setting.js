import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import classes from "Sass/settingLayout.module.sass";
import Checkbox from '@material-ui/core/Checkbox';
import wordMap from "Src/wordMap";
import { settingString } from "Src/actionString";


const Setting = () => {
  const dispatch = useDispatch()

  const wordList = useSelector((state)=> {
    return state.setting.wordList
  })

  useEffect(()=> {
    const action = {
      type: settingString().wordInit
    }
    dispatch(action)
  }, [])

  const handleChange = (event) => {
    const word = event.target.value
    const action = {
      type: settingString().addWord,
      word
    }
    dispatch(action)
  }


  return (
    <div className={classes.settingLayout}>
      <div className={classes.settingTitle}>pick up the words you want to train</div>
      <div className={classes.contentWrapper}>
        {/* {wordList} */}
        {wordList.map((item, index)=> {
          return <div key={index} className={classes.itemWrapper}>
            <Checkbox size='small' onChange={handleChange} value={item}></Checkbox>{item}
          </div>
        })}
      </div>     
    </div>
  )
}

export default Setting