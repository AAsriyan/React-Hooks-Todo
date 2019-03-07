import React, { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const updateValue = e => {
    setValue(e.target.value);
  };

  return {
    value,
    updateValue,
    setValue
  };
};
