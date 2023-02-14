import { useState } from "react";
import LeftSide from "./compomemts/LeftSide";
import MyForm from "./compomemts/MyForm";
import Thanks from "./compomemts/Thanks"

function App() {

const [submitted, setSubmitted] = useState(false)
function submit(){
  setSubmitted(oldOne => !oldOne)
}
  return (
    <div className="flex lg:flex-row flex-col font-spaceGrotesk font-[18px] h-[100vh]">
        <LeftSide />
        {submitted ?  
        <Thanks submit={submit} /> :
        <MyForm submit={submit} />
}
    </div>
  );
}

export default App;
