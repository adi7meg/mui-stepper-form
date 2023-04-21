import {
  Button,
  CssBaseline,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

const getSteps = () => {
  return [
    "Basic Infomation",
    "Personal Infomation",
    "Contact Infomation",
    "Payment",
  ];
};

const BasicInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalInformation = () => {
  const { control } = useFormContext();
  return (
    <>
     <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        placeholder="Enter Your E-mail Address"
        fullWidth
        margin="normal"
        {...field}
      />
        )}
      />
      
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
          id="phone-number"
          label="Phone Number"
          variant="outlined"
          placeholder="Enter Your Phone Number"
          fullWidth
          margin="normal"
          {...field}
        />
        )}
      />

<Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
        id="alternate-phone"
        label="Alternate Phone"
        variant="outlined"
        placeholder="Enter Your Alternate Phone"
        fullWidth
        margin="normal"
        {...field}
      />
        )}
      />

</>
      
  );
};
const ContactInformation = () => {
  const { control } = useFormContext();
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
};
const Payment = () => {
  const { control } = useFormContext();
  return (
    <>

<Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
        id="cardNumber"
        label="Card Number"
        variant="outlined"
        placeholder="Enter Your Card Number"
        fullWidth
        margin="normal"
        {...field}
      />
        )}
      />

<Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
        id="cardMonth"
        label="Card Month"
        variant="outlined"
        placeholder="Enter Your Card Month"
        fullWidth
        margin="normal"
        {...field}
      />
        )}
      />

     <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
        id="cardYear"
        label="Card Year"
        variant="outlined"
        placeholder="Enter Your Card Year"
        fullWidth
        margin="normal"
        {...field}
      />
        )}
      /> 
     
    
    </>
  );
};

const getStepContent = (activeState) => {
  switch (activeState) {
    case 0:
      return <BasicInformation />;
    case 1:
      return <PersonalInformation />;
    case 2:
      return <ContactInformation />;
    case 3:
      return <Payment />;

    default:
      return "unknown case";
  }
};

const MuiStepper = () => {
  const [activeState, setActiveState] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });

  //for checking  optional Steps
  const isStepOptional = (activeState) => {
    return activeState === 1 || activeState === 2;
  };

  //for checking skipped
  const isStepSkipped = (activeState) => {
    return skippedSteps.includes(activeState);
  };

  //for next Step
  const handleChangeNext = (data) => {
    console.log("formData",data);
    setActiveState(activeState + 1);
    setSkippedSteps(
      skippedSteps.filter((skippedItem) => skippedItem !== activeState)
    );
  };

  //for previous Step
  const handleChangeBack = () => {
    setActiveState(activeState - 1);
  };

  //skip functionality
  const handleSkip = () => {
    setActiveState(activeState + 1);

    setSkippedSteps([...skippedSteps, activeState]);
  };

  //Form  Submit funcnction
  // const onSubmitFunc = (formdata) => {
  //   console.log("formData", formdata);
  // };

  return (
    <div>
      <CssBaseline/>
      <Stepper activeStep={activeState}>
        {steps.map((step, index) => {
          const lableProps = {};
          const stepsProps = {};
          if (isStepOptional(index)) {
            lableProps.optional = (
              <Typography variant="caption">optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepsProps.completed = false;
          }

          return (
            <Step {...stepsProps} key={index}>
              <StepLabel {...lableProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeState === 4 ? (
        <Typography variant="h3" align="center">
          Thanks
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleChangeNext)}>
              {getStepContent(activeState)}
              <Button
                variant="contained"
                disabled={activeState === 0}
                onClick={handleChangeBack}
              >
                Back
              </Button>
              {isStepOptional(activeState) && (
                <Button onClick={handleSkip} variant="contained">
                  Skip
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                // onClick={handleChangeNext}
              >
                {activeState === 3 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default MuiStepper;
