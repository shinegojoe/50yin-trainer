import React, { useState, useEffect, useCallback, useRef } from "react";
import Kuroshiro from "kuroshiro/dist/kuroshiro.min.js";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji/dist/kuroshiro-analyzer-kuromoji.min.js";

import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classes from "Sass/lyricLayout.module.sass";
import wordMap from "Src/wordMap";



const Lyric = () => {
  const [ converter, setConverter] = useState(null)
  const [ inputText, setInputText] = useState('')
  const [ resText, setResText ] = useState('')
  const outputTexture = useRef(null)

  useEffect(async()=> {
    const kuroshiro = new Kuroshiro();
    const analyzer = new KuromojiAnalyzer({
      dictPath: '/dict/'
    })
    await kuroshiro.init(analyzer);
    // console.log('kkk', kuroshiro)
    // console.log('xxx', analyzer)
    // console.log('q', qq)
    setConverter(kuroshiro)
  }, [])

  const transferClick = async() => {
    // const result = await kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { to: "hiragana" });
    // console.log('res', result)
    const result = await converter.convert(inputText, { to: "hiragana" });
    console.log('res', result)
    console.log(outputTexture)
    outputTexture.current.value = result
    setResText(result)
  }

  const handleInput = (val) => {
    console.log(val.target.value)
    setInputText(val.target.value)
  }

  const play = (w) => {
    const p = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        const sound = new Audio(`learn50/${w.roi}.mp3`)
        sound.play()
        resolve()
      }, 800)
    })
    return p
  }

  const playClick = async() => {
    console.log('res', resText)
    for (const t of resText) {
      // console.log('t', t)
      const w = wordMap[t]
      if(w) {
        console.log('w', w)
        const p = await play(w)
      }
    }
  }

  return (
    <div className={classes.lyricLayout}>
      <TextareaAutosize rowsMin={5} onChange={handleInput} aria-label="empty textarea" placeholder="Empty" />
      <Button onClick={transferClick}>transfer</Button>
      <TextareaAutosize ref={outputTexture} rowsMin={5} aria-label="empty textarea" placeholder="Empty" />
      <Button onClick={playClick}>play</Button>


    </div>
  )
}

export default Lyric