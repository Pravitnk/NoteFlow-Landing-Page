import { React, useState } from "react";
import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useModalContent } from "../../../context/ModalContext";

const initialState = {
  email: "",
  password: "",
};
const SignUp_Modal = () => {
  const { setActiveModal } = useModalContent();
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  console.log(inputs);

  const handleInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      console.log(inputs);
      setInputs(initialState);

      //close the modal
    }
  };

  return (
    <section className="grid max-w-3xl grid-cols-2">
      {/* left  */}
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center">
        <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight">
          Lets Get You <br />
          Signed Up
        </h4>
        <p className="text-primary-100 text-lg/8">
          No charges, no fees. Get note taking in minutes!
        </p>
      </div>

      {/* right */}
      <div className="bg-primary-1500 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10">
        <button
          className="border-primary-75 hover:bg-primary-75 group transition-property ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
        >
          <Close
            className="stroke-primary-75 group-hover:stroke-primary-1300 transition-property"
            width={3}
            alt="close"
          />
        </button>
        <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-normal">
          <label>
            Email{" "}
            <input
              className="bg-primary-75 placeholder-primary-1300 text-primary-1500 placeholder-opacity-20 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light"
              name="email"
              type="email"
              placeholder="xyz@gmail.com"
              value={inputs.email}
              onChange={handleInputs}
            />
          </label>

          <label>
            Password{" "}
            <input
              className="bg-primary-75 placeholder-primary-1300 text-primary-1500 placeholder-opacity-20 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light"
              name="password"
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleInputs}
            />
          </label>
        </div>

        <div>
          <div
            onClick={() => setChecked((prev) => !prev)}
            className="m-auto mb-4 w-fit cursor-pointer gap-x-2"
          >
            <button
              className={`border-primary-100 transition-property mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${checked && "bg-primary-100"} `}
            >
              <Checkmark width={2} className="stroke-primary-1500" />
            </button>
            <p className="text-primary-100 inline cursor-pointer text-sm">
              I agree to all terms
            </p>
          </div>
          <button
            className="border-primary-500 bg-primary-500 transition-property hover:bg-primary-50 hover:border-primary-50 text-primary-1300 primary-glow primary-glow-hover w-full cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal"
            onClick={handleSubmit}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp_Modal;
