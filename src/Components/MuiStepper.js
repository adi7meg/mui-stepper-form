import {
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const getSteps = () => {
  return [
    "Basic Infomation",
    "Personal Infomation",
    "Contact Infomation",
    "Payment",
  ];
};

const getStepContent = (activeState) => {
  switch (activeState) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
      );
    case 1:
      return (
        <>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
      );
    case 3:
      return (
        <>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
        </>
      );

    default:
      return "unknown case";
  }
};

const MuiStepper = () => {
  const [activeState, setActiveState] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();


 //for checking  optional Steps
  const isStepOptional = (activeState) => {
    return activeState === 1 || activeState === 2 ;
  };

  //for checking skipped
  const isStepSkipped = (activeState) => {
    return skippedSteps.includes(activeState)
  }


   //for next Step
  const handleChangeNext = () => {
    setActiveState(activeState + 1);
    setSkippedSteps(skippedSteps.filter((skippedItem) => skippedItem !== activeState ))
  };

   //for previous Step
  const handleChangeBack = () => {
    setActiveState(activeState - 1);
  };

  //skip functionality
  const handleSkip = () => {
    setActiveState(activeState+1);

    setSkippedSteps([...skippedSteps,activeState]);
  }


  return (
    <div>
      <Stepper activeStep={activeState}>
        {steps.map((step, index) => 
        {
        const lableProps = {}
        const stepsProps = {}
        if (isStepOptional(index)){
            lableProps.optional = <Typography variant="caption">optional</Typography>
        }
        if (isStepSkipped(index)){
          stepsProps.completed = false;
      }
        
        return(
          <Step {...stepsProps} key={index}>
            <StepLabel  {...lableProps}>{step}</StepLabel>
          </Step>
        )})}
      </Stepper>

      {activeState === 4 ? (
        <Typography variant="h3" align="center">
          Thanks
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeState)}</form>
          <Button
            variant="contained"
            disabled={activeState === 0}
            onClick={handleChangeBack}
          >
            Back
          </Button>
          {isStepOptional(activeState) && (
            <Button onClick={handleSkip} variant="contained">Skip</Button>
          )}
          <Button variant="contained" onClick={handleChangeNext}>
            {activeState === 3 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default MuiStepper;
