import React, { useState } from "react";
import classes from "./Stepper.module.scss";
import AvailableModels from "../AvailableModels/AvailableModels";
import AvailableColors from "../AvailableColors/AvailableColors";
import AvailableEngines from "../AvailableEngines/AvailableEngines";

const Stepper = ({ vehicleId, vehicle, setVehicle }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <AvailableModels
      vehicleId={vehicleId}
      vehicle={vehicle}
      setVehicle={setVehicle}
    ></AvailableModels>,
    <AvailableColors
      vehicle={vehicle}
      setVehicle={setVehicle}
    ></AvailableColors>,
    <AvailableEngines
      vehicle={vehicle}
      setVehicle={setVehicle}
    ></AvailableEngines>,
  ];

  return (
    <div className={classes.stepper}>
      <div className={classes.stepperContainer}>
        <nav className={classes.stepperNav}>
          <div className={classes.stepperNavContainer}>
            <button
              className={
                `${classes.stepNav} ${classes.stepModel}` +
                (currentStep === 0 ? ` ${classes.activeStep}` : "")
              }
              onClick={() => setCurrentStep(0)}
            >
              <div className={classes.navIndicator}></div>
              <div className={classes.stepIcon}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36.115"
                  height="15"
                  viewBox="0 0 36.115 15"
                >
                  <path d="M28.22 15c1.404 0 2.716-.764 3.424-1.973l3.05-.02c.34 0 .652-.144.878-.4.418-.482.43-1.15.264-2.515.15-.214.28-.518.28-.93 0-.853-.605-2.158-1.58-2.78-1.046-.664-3.196-1.46-5.75-2.13l-.268-.07c-.45-.12-.84-.222-1.13-.305-.2-.068-1.212-.665-1.88-1.06C22.68 1.153 20.637 0 19.51 0c-4.873 0-7.707.1-10.646.658-.39.073-.643.32-.813.488-2.176.492-4.16 1.55-5.6 2.985C0 6.58 0 7.363 0 7.74v3.742l.195.266c1.018 1.377 4.645 1.44 4.68 1.44l.13-.003C5.72 14.312 6.954 15 8.298 15c1.36 0 2.604-.7 3.313-1.85l3.496-.024c1.415-.01 2.896-.022 4.95-.034l4.755-.025c.718 1.2 1.997 1.933 3.41 1.933zM19.51 1c.942 0 3.534 1.527 5.426 2.643 1.306.77 1.92 1.124 2.177 1.197.295.084.69.19 1.15.31l.268.072c2.425.635 4.52 1.404 5.472 2.007.74.47 1.113 1.493 1.113 1.932 0 .18-.053.322-.155.426l-.175.174.03.243c.157 1.222.158 1.767.003 1.944-.035.036-.074.057-.125.057l-3.666.023-.135.28C30.397 13.337 29.348 14 28.22 14c-1.136 0-2.156-.635-2.663-1.658l-.14-.28-5.364.03c-2.056.012-3.537.023-4.953.034l-4.088.028-.14.27c-.5.97-1.487 1.576-2.575 1.576-1.076 0-2.058-.594-2.562-1.55l-.143-.27-.718.007c-.985-.025-3.346-.32-3.874-1.035V7.74c0-.48.767-1.51 2.155-2.9 1.336-1.334 3.2-2.31 5.248-2.748l.13-.028.187-.17c.13-.13.232-.235.33-.254C11.91 1.096 14.7 1 19.51 1z"></path>
                  <path d="M8.297 15c2.176 0 3.942-1.77 3.942-3.945 0-2.173-1.77-3.942-3.943-3.942s-3.943 1.77-3.943 3.942C4.354 13.23 6.124 15 8.297 15zm0-6.89c1.623 0 2.942 1.32 2.942 2.944 0 1.625-1.32 2.944-2.943 2.944s-2.943-1.32-2.943-2.944c0-1.622 1.32-2.943 2.943-2.943zM28.286 15c2.175 0 3.943-1.77 3.943-3.945 0-2.173-1.77-3.942-3.944-3.942s-3.944 1.77-3.944 3.942c0 2.175 1.768 3.945 3.944 3.945zm0-6.89c1.623 0 2.943 1.32 2.943 2.944 0 1.625-1.32 2.945-2.944 2.945s-2.944-1.32-2.944-2.946c0-1.622 1.32-2.943 2.944-2.943z"></path>
                </svg>
              </div>
              <div className={classes.stepTitle}>Model</div>
            </button>
            <button
              className={
                `${classes.stepNav} ${classes.stepColor}` +
                (currentStep === 1 ? ` ${classes.activeStep}` : "")
              }
              onClick={() => setCurrentStep(1)}
            >
              <div className={classes.navIndicator}></div>
              <div className={classes.stepIcon}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20.535"
                  viewBox="0 0 22 20.535"
                >
                  <path d="M11.078 13.788c-3.8 0-6.893-3.092-6.893-6.894S7.277 0 11.078 0c3.803 0 6.896 3.093 6.896 6.894s-3.093 6.894-6.896 6.894zm0-12.788c-3.25 0-5.892 2.644-5.892 5.894s2.644 5.894 5.893 5.894c3.25 0 5.895-2.644 5.895-5.894S14.33 1 11.078 1z"></path>
                  <path d="M15.106 20.535c-3.802 0-6.896-3.092-6.896-6.892 0-3.803 3.093-6.896 6.896-6.896C18.908 6.747 22 9.84 22 13.643c0 3.8-3.092 6.892-6.894 6.892zm0-12.788c-3.25 0-5.896 2.645-5.896 5.896 0 3.248 2.645 5.892 5.896 5.892 3.25 0 5.894-2.644 5.894-5.892 0-3.25-2.645-5.896-5.894-5.896z"></path>
                  <path d="M6.894 20.535C3.092 20.535 0 17.442 0 13.64c0-3.8 3.092-6.893 6.894-6.893S13.79 9.84 13.79 13.64s-3.094 6.895-6.896 6.895zm0-12.788C3.644 7.747 1 10.39 1 13.64s2.644 5.895 5.894 5.895 5.896-2.644 5.896-5.894-2.645-5.893-5.896-5.893z"></path>
                </svg>
              </div>
              <div className={classes.stepTitle}>Color</div>
            </button>
            <button
              className={
                `${classes.stepNav} ${classes.stepEngine}` +
                (currentStep === 2 ? ` ${classes.activeStep}` : "")
              }
              onClick={() => setCurrentStep(2)}
            >
              <div className={classes.navIndicator}></div>
              <div className={classes.stepIcon}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.999"
                  height="17.486"
                  viewBox="0 0 26.999 17.486"
                >
                  <path d="M25.542 6.133c-.09-.092-.216-.105-.345-.105h-2.163c-.266 0-.524.137-.524.406V8.22h-1.47l-2.667-4c-.08-.45-.478-.875-.952-.875H12.93V.975h3.663c.266 0 .483-.222.483-.487 0-.268-.218-.488-.482-.488H8.265c-.268 0-.484.22-.484.488 0 .266.216.486.483.486h3.688v2.372h-4.6c-.534 0-1.002.472-1.002 1.004v.118L5.268 5.54H4.147c-.268 0-.48.178-.48.447v3.208H.977V5.45c0-.268-.22-.484-.49-.484-.265 0-.486.217-.486.484v8.324c0 .268.22.484.486.484.27 0 .488-.217.488-.484v-3.602h2.69V12.7c0 .266.213.64.48.64H5.27l1.226 1.286 2.418 2.77c.092.108.227.09.37.09H20.32c.534 0 .967-.323.967-.858l-.004-1.336h1.226v1.796c0 .267.258.397.523.397h1.97c.128 0 .25-.008.34-.096 1.157-1.14 1.612-3.624 1.652-5.608.053-2.582-.49-4.667-1.453-5.65zm.488 5.625c-.043 2.13-.525 3.777-1.237 4.752h-1.31v-1.84c0-.267-.182-.355-.45-.355h-2.232c-.128 0-.25-.013-.342.078s-.142.134-.142.263l.005 1.854H9.51l-2.284-2.646-1.378-1.436c-.092-.104-.223-.062-.36-.062h-.847v-5.85h.82c.12 0 .238-.07.33-.152l1.39-1.32c.1-.09.142-.23.142-.366v-.356h10.1s.028.206.084.283l2.88 4.307c.09.132.24.283.398.283h2.25c.27 0 .45-.347.45-.614V7h1.496c.683.735 1.092 2.63 1.05 4.758z"></path>
                </svg>
              </div>
              <div className={classes.stepTitle}>Engine</div>
            </button>
          </div>
        </nav>
        <div className={classes.Step}>{steps[currentStep]}</div>
      </div>
    </div>
  );
};

export default Stepper;
