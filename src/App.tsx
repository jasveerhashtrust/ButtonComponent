import Button from "./component/button";
import { SizeEnum } from "./component/button";
import { TypeEnum } from "./component/button";
function App() {

  const handleChnage = () => {
    console.log("hi")
  }

  return (
    <div>
      <Button size={SizeEnum.Large} type={TypeEnum.Base} children={"Button"} />
      <Button size={SizeEnum.Large} type={TypeEnum.Question} onClick={handleChnage} children={"Button"} />
    </div>
  );
}

export default App;
