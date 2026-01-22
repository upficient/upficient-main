"use client";

import { InputTextProps } from "@/types/form-fields";
import React from "react";
import InfoFilled from "../Icons/InfoFilled";
import "./InputField.scss";

const InputText: React.FC<InputTextProps> = ({
  register,
  fieldName,
  errors,
  label,
  placeholder,
  value,
  maxLength,
  setValue,
  disabled,
  icon,
  isRequired,
  autoFocus = false,
  onKeyDown,
  type,
}) => {
  return (
    <div
      className={`input-field ${errors?.[fieldName] ? "error" : ""} ${
        icon ? "with-icon" : ""
      }`}
    >
      <input
        autoFocus={false}
        type={type ? type : "text"}
        id={fieldName}
        name={fieldName}
        maxLength={maxLength}
        className="form-control"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        autoComplete="off"
        required={isRequired}
        {...(register
          ? register(fieldName, {
              onChange: (e: any) => {
                setValue?.(String(fieldName), e.target.value);
              },
            })
          : { onChange: (e) => setValue?.(fieldName, e.target.value) })}
        onKeyDown={onKeyDown}
      />
      <label className="inputlabel" htmlFor={fieldName}>
        {label} {isRequired ? "*" : ""}
      </label>

      {icon && <i className="icon">{icon}</i>}
      {errors?.[fieldName] && (
        <p className="text-error">
          <InfoFilled />
          {errors?.[fieldName]?.message}
        </p>
      )}
    </div>
  );
};

export default InputText;
