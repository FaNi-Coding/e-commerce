import Button from '@/components/UI/Button/Button';
import Section from '@/components/UI/Section/Section';
import React from 'react';

type Props = {};

const Checkout = (props: Props) => {
  return (
    <Section dynamicStyles='max-width-container justify-center'>
      <form className='py-[5.4rem] px-[4.8rem] sm:min-w-[73rem]'>
        <div className='space-y-12'>
          <h3>Checkout</h3>
          <p className='subTitle text-primary'>billing details</p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block labelText'>
                Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='name'
                  className='input'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='email' className='block labelText'>
                Email
              </label>
              <div className='mt-2'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='input'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block labelText'>
                Phone number
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='phone-number'
                  id='phone'
                  autoComplete='phone-number'
                  className='input'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <p className='subTitle text-primary'>billing details</p>
              <label htmlFor='street-address' className='block labelText'>
                Street address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  className='input'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block labelText'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='input'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block labelText'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='input'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block labelText'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='input'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default Checkout;
