import React from 'react';
import Header from './component/header'
import ImgRow from './component/imgRow'
import Body from './component/body'
import Body2 from './component/body2'
import Body3 from './component/body3'
import Body4 from './component/body4'
import End from './component/end.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <ImgRow/>
      <Body/>
      <Body2/>
      <Body3/>
      <Body4/>
      <End/>
    </div>
  );
}

export default App;
