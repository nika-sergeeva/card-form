import { useState } from "react";
import LeftSide from "./compomemts/LeftSide";
import MyForm from "./compomemts/MyForm";
import Thanks from "./compomemts/Thanks"

function App() {

const [submitted, setSubmitted] = useState(false)
function submit(){
  setSubmitted(oldOne => !oldOne)
}


const [showNewCard, setShowNewCard] = useState({
  number: '',
  name: '',
  mm: '',
  yy: '',
  cvc: ''
})



  return (
    <div className="flex lg:flex-row flex-col font-spaceGrotesk font-[18px] h-[100vh]">
        <LeftSide 
        name={showNewCard.name}
        number={showNewCard.number}
        yy={showNewCard.yy}
        mm={showNewCard.mm}
        cvc={showNewCard.cvc} 
        />
        {submitted ?  
        <Thanks submit={submit} /> 
        :
        <MyForm 
        submit={submit} 
        formNewCard={setShowNewCard}
        />
}
    </div>
  );
}

export default App;
