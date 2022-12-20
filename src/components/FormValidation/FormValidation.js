import React from "react";
import { useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });

    if (name === "name") {
      if (value.length < 2 || value.length > 30) {
        setErrors({
          ...errors,
          [name]: "Поле должно иметь не менее 2 и не более 30 символов",
        });
      }
      if (value.length === 0) {
        setErrors({ ...errors, [name]: "Необходимо заполнить это поле" });
      }
    }

    if (name === "email" || name === "password") {
      if (value.length === 0) {
        setErrors({ ...errors, [name]: "Необходимо заполнить это поле" });
      }
    }

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );


  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}

