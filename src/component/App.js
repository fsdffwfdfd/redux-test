import './App.css';
import Comunter from './Comunter';
import Buttons from './Buttons';
import StepInput from './StepInput';

function App() {
  return (
              
    /* ------------------------
              UI
       ------------------------
         카운터(숫자)     => Comunter Comp
       ----------------------
       [증가버튼] [감소버튼]  => Buttons
       ------------------------
       [간걱 수정 입력창]  => StepInput


    */

    <div className="App">
      <Comunter />
      <Buttons />
      <StepInput />

     
    </div>
  );
}

export default App;
