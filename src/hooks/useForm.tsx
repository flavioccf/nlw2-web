import { useState } from 'react';

function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  function setValue(key: string, val: string) {
    setValues({
      ...values,
      [key]: val,
    });
  }
  function handleChange(e: any) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setValue(name, value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;