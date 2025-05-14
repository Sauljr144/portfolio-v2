import { ErrorMessage, Field } from 'formik';

interface FromInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  errorText: string;
  as?: string;
  height?: string;
}

const FormInput: React.FC<FromInputProps> = ({
  id,
  name,
  label,
  placeholder,
  errorText,
  as,
  height,
}) => {
  return (
    <div className='flex flex-col mb-3 '>
      <label className='mb-1 flex flex-col  lg:text-base text-sm'>
        {label}
      <Field
        as={as}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`lg:py-3 py-2 px-3 rounded-3xl border border-[#b5b5b5a4] focus:outline-orange-dark bg-white-tan text-sm lg:placeholder:text-sm placeholder:text-xs ${height}`}
      />
      </label>
      <ErrorMessage
        name={errorText}
        component='div'
        className='text-rose-500 text-xs mt-1'
      />
    </div>
  );
};

export default FormInput
