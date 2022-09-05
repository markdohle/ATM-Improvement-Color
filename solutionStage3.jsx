//call in onChange as the only property of the ATMDeposit component. Look at the return for the account function.
const ATMDeposit = ({ onChange, isDeposit, isValid, color }) => {
  const choice = ['Deposit Cash', 'Withdrawl Cash']
  console.log(`ATM isDeposit: ${isDeposit}`);
  /*return label with two input types.
    1. a number that the user inputs. This is the deposit from the handleChange function. This parameter has to be named the same as the ATMDeposit property.
    2. a submit icon that is static.

  */
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange} style={color} ></input>
      <input type="submit" width="200" disabled={!isValid} value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [deposit,setDeposit] = React.useState(0); // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState("");
  const [mode, setMode] = React.useState("");
  const [validation,setValidation] = React.useState(false)
  const [color,setColor] = React.useState({})
  let status = `Account Balance $ ${totalState} `;
  let newColor = "grey"
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    let newAmount = Number(event.target.value)
    newColor = "Grey"
    setValidation(false)
    setColor({backgroundColor: newColor})

    if (newAmount <= 0) {
      newColor = "red"
      setColor({backgroundColor: newColor})
      return setValidation(false)
    }
    if (mode === 'Withdrawl Cash' && newAmount > totalState) {
      newColor = "red"
      setColor({backgroundColor: newColor})
      return setValidation(false)
    } else {
      newColor = "green"
      setColor({backgroundColor: newColor})
      setValidation(true)
    }
    console.log(`handleChange ${event.target.value}`);
    setDeposit(newAmount);
  };
  const handleSubmit = () => {
    setValidation(false)
    newColor = "grey"
    setColor({backgroundColor: newColor})
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    event.preventDefault();
  };

  const handleModeChange = (event) => {
    setValidation(false)
    newColor = "grey"
    setColor({backgroundColor: newColor})
    let newMode = event.target.value;
      setMode(newMode);
  
      if (newMode === "Deposit Cash"){
        setIsDeposit(true)
      } else if (newMode === "Withdrawl Cash") {
        setIsDeposit(false)
      } else {
        setIsDeposit("")
      }

  }
  //pull in the <h3> and <input>/<> return from the ATMDeposit functional component
  //onChange value = deposit
  //onSubmit happens when the submit <input> is clicked, then the value is the status, which is the account total.
  return (
    <form onSubmit={handleSubmit}>
      <>
      <h2 id="total">{status}</h2>
      <label>Select a transaction mode</label>
      <select onChange={(e) => handleModeChange(e)} name="mode" id="mode-select">
        <option value="">Select Mode</option>
        <option value="Deposit Cash">Deposit Cash</option>
        <option value="Withdrawl Cash">Withdrawl Cash</option>
      </select>
      {
          mode && (<ATMDeposit
            onChange={handleChange}
            isValid={validation}
            color = {color}
            isDeposit={isDeposit}>ATMDeposit is rendered only if atmMode is truthy or falsy</ATMDeposit>)
      }
      </>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
