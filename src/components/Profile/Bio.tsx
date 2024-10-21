import { Field, ErrorMessage } from 'formik';
import { Label } from './ui/label';

const Bio = () => {
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='font-archivo text-xl'>Bio</h1>

      <div className='w-72 mt-4'>
        <Label
          htmlFor='bio'
          className='block mb-2 text-sm font-medium text-gray-700'
        >
          About Me
        </Label>
        <Field
          as='textarea'
          id='bio'
          name='bio'
          placeholder='Write about yourself...'
          rows={9}
          className='w-full max-w-3xl p-4 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent'
        />
        <ErrorMessage
          name='bio'
          component='div'
          className='text-red-500 text-sm mt-1'
        />
      </div>
    </div>
  );
};

export default Bio;
