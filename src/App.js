import Main from 'Components/main'
import Tabs from "Components/tabs"
import classes from "Sass/mainLayout.module.sass"
import Trainer from 'Components/trainer'
import Lyric from 'Components/lyric'
import HandWrite from "Components/handWrite";

import React, { useState } from "react";

function App() {
  const [ tabIndex, setTabIndex ] = useState(0)
  

  const tabUpdate = (val) => {
    setTabIndex(val)
  }

  const handleSetting = () => {

  }

  

  return (
    // <div className={classes.mainLayout}>
    <div>
      {/* <Main></Main> */}
      {/* <Tabs tabUpdate={tabUpdate}></Tabs>
      {tabIndex === 0 &&  <Trainer></Trainer>}
      {tabIndex ===1 && <Lyric></Lyric>} */}
      <Trainer></Trainer>
      {/* <Tabs tabUpdate={tabUpdate}></Tabs> */}
      {/* <HandWrite></HandWrite> */}

     
    </div>
   
  )
}

export default App;
