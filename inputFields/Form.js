import React from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import SelectInput from "./SelectInput";

const Form = ({ formData, handleChange, errors, fields }) => (
  <>
    {fields.map((field) => {
      if (field.type === "textarea") {
        return (
          <TextAreaInput
            key={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
            label={field.label}
            placeholder={field.placeholder}
          />
        );
      } else if (field.type === "select") {
        return (
          <SelectInput
            key={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
            label={field.label}
            options={field.options}
          />
        );
      } else {
        return (
          <TextInput
            key={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
            label={field.label}
            placeholder={field.placeholder}
          />
        );
      }
    })}
  </>
);

export default Form;