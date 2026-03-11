import React, { useContext, useState } from 'react';
import { SurveyContext } from './context';
import { SurveyProps } from './types';

const Survey = ({ children, onSubmit }: SurveyProps) => {
  const [values, setValues] = useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit) {
      throw new Error('onSubmit callback is required!');
    }
    onSubmit(values);
  };

  return (
    <SurveyContext.Provider value={{ handleSubmit, values, setValues }}>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {children}
      </form>
    </SurveyContext.Provider>
  );
};

type ShortAnswerProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
};
const ShortAnswer = ({ name, label, placeholder, required }: ShortAnswerProps) => {
  const { values, setValues } = useContext(SurveyContext)!;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={values[name] ?? ''}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
      />
    </div>
  );
};

type LongAnswerProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
};
const LongAnswer = ({ name, label, placeholder, required }: LongAnswerProps) => {
  const { values, setValues } = useContext(SurveyContext)!;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={values[name] ?? ''}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
      />
    </div>
  );
};

type ChoiceProps = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
};
const Choice = ({ name, label, options, required }: ChoiceProps) => {
  const { values, setValues } = useContext(SurveyContext)!;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        value={values[name] ?? ''}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const Submit = ({ children }: { children: React.ReactNode }) => (
  <button type="submit">{children}</button>
);

Survey.ShortAnswer = ShortAnswer;
Survey.LongAnswer = LongAnswer;
Survey.Choice = Choice;
Survey.Submit = Submit;

export default Survey;
