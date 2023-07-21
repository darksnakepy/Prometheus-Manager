import { useState } from "react";
import Switch from '@mui/material/Switch';



const ToggleSwitch = ({ onChange = (isChecked: boolean) => {} }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return(
    <div className="mt-11">
      <Switch onChange={handleChange} />
    </div>
  );

};

export default ToggleSwitch;