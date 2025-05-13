import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selected: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="flex space-x-8">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only peer"
          />
          <div className="
            w-5 h-5 
            border-2 
            rounded-full 
            flex items-center justify-center
            border-gray-300
            peer-checked:border-purple-600
            mr-2
            transition-colors
          ">
            <div className={`
              w-3 h-3 
              rounded-full 
              transition-all
              ${selected === option.value ? 'bg-purple-600' : 'bg-transparent'}
            `}></div>
          </div>
          <span className="text-gray-700 text-base">{option.label}</span>
        </label>
      ))}
    </div>
  );
};