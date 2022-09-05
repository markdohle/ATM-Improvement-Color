# ATM-Improvement-Color
MIT xPro - React Week 5 - Simple Components

Video 15.6 (7:17): ATM Deposit And Cashback Buttons

This repository works with functional components.
Account is the parent component. It acts as the bank and keeps track of the total amount of money in the account.

There three functions that handle the inputs submitted by the user at the ATM machine.
  1. handleChange()
  2. handleSubmit()
  3. handleModeChange()

React.useState() is used to upade the state of 6 values.
  1. deposit is the amount of money entered by the user
  2. totalState is the amount of money in the bank
  3. isDeposit comunicates instruction in regards to transaction mode to the user of the ATM
  4. mode is the menue choice for the transaction
  5. the validation of the transaction ensures that the withdrawl does not take the account into the red
  6. color communicates valid or invalid amounts to the user.

ATMDeposit is the child component. It acts as the ATM machine where you input the transaction mode with a selection menu, in input area, and a submit icon.

