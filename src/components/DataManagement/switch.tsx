import { useState } from "react";

const ToggleSwitch = ({ onChange = (isChecked: boolean) => {} }) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };;


  return(
    <label htmlFor="toggleFour" className="flex cursor-pointer select-none items-center mt-10 ">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleFour"
            className="sr-only"
            onClick={handleChange}
          />
          <div className="box bg-[#3330d3] block h-8 w-14 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "transform translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
  );

};

export default ToggleSwitch;