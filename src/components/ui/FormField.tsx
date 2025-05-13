import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={id}
        className="text-sm font-medium text-purple-600 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        className="
          border border-gray-300 
          rounded-md 
          px-4 py-3
          text-gray-900
          placeholder-gray-400
          focus:outline-none 
          focus:ring-1 
          focus:ring-purple-500 
          focus:border-purple-500
          invalid:border-red-500
          invalid:ring-red-500
          text-base
        "
        required={required}
        {...props}
      />
    </div>
  );
};