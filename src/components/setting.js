import React, { useEffect, useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';

import wordMap from "Src/wordMap";
import classes from "Sass/settingLayout.module.sass";


const Setting = (props) => {
  const [ wordList, setWordList] = useState([])
  // const [ selectedList, setSelectedList ] = useState([])
  const { setSelectedList, selectedList } = props

  useEffect(()=> {
    const words = Object.keys(wordMap)
    setWordList(words)
  }, [])

  const handleChange = (event) => {
    // console.log(event.target)
    let newArr = null
    const word = event.target.value
    if(selectedList.includes(word)) {
      // remove
      newArr = selectedList.filter((item, index)=> {
        return item !== word
      })
    } else {
      newArr = [...selectedList]
      console.log(newArr)
      newArr.push(word)
    }
    setSelectedList(newArr)

  };

  return (
    <div className={classes.settingLayout}>
      <div className={classes.settingTitle}>pick up the words you want to train</div>
      <div className={classes.contentWrapper}>
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