
import { useState } from "react";
function Form() {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return(
    <>
    <div>
      <label htmlFor="">Password:-</label>
      <input type="password" onChange={onChangeHandler} value={value} />
    </div>
    </>  
  );
}
export default Form
