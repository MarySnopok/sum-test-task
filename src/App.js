import { ButtonGrid } from "./ButtonGrid";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const [finalSum, setFinalSum] = useState();

  // agregating user input in a result array
  const userInputArgerator = (e) => {
    const newResult = result + e.target.value;
    setResult(newResult);
  };

  //modifying the string -taking out # and * characters and
  // find the sum of selected numbers

  const modifyUserInput = (result) => {
    // converting to array and filtering only charCodeAt() 0-9 => unicodes 48-57
    //console.log("1".charCodeAt(0))
    const filteredResult = result.split("").filter((char) => {
      const code = char.charCodeAt(0);
      if (code >= 48 && code <= 57) {
        return true;
      } else {
        return false;
      }
    });
    //summing up the final total
    const finalResult = filteredResult.reduce((sum, value) => sum + parseInt(value, 10), 0);
    return finalResult;
  };

  const onSumButtonClick = () => {
    const finalSum = modifyUserInput(result);
    setFinalSum(finalSum);
  };

  const onResetButtonClick = () => {
    setResult("");
    setFinalSum("");
  };

  return (
    <div className="App">
      <ButtonGrid onButtonClick={userInputArgerator} />
      <div className="container">
        <button className="genericBtn" onClick={onSumButtonClick}>
          Sum
        </button>
        <button className="genericBtn" onClick={onResetButtonClick}>
          Reset
        </button>
      </div>
      {finalSum && <div className="finalResult">Result : {finalSum}</div>}
    </div>
  );
}
