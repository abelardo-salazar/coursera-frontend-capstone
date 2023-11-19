import React, { useReducer } from 'react'
import { Formik } from 'formik'
import { string, number, date, object } from "yup"

import { BookingForm } from '../../components/BookingForm/BookingForm'

import { validators } from "../../utils/validators"

import "./index.css"
import { occasionOptions } from '../../utils/fieldsOptions'
import { fetchAPI, submitAPI } from '../../utils/Api'

export const Booking = () => {
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const bookingFormSchema = object({
    "res-name":
      string()
        .default("")
        .required(validators.required),
    "res-date":
      date()
        .nullable()
        .typeError(validators.invalidDate)
        .required(validators.required)
        .default(new Date().toISOString().slice(0, 10))
        .min(new Date().toISOString().slice(0, 10), validators.afterNow),
    "res-time":
      string()
        .default(availableTimes[0])
        .required(validators.required)
        .oneOf(availableTimes, validators.option),
    guests:
      number()
        .default(1)
        .required(validators.required)
        .min(1, validators.minNum(1))
        .max(10, validators.maxNum(10)),
    occasion:
      string()
        .default(occasionOptions[0])
        .required(validators.required)
        .oneOf(occasionOptions, validators.option)
  })

  const bookingFormInitialValues = {
    "res-name": "",
    "res-date": new Date().toISOString().slice(0, 10),
    "res-time": availableTimes[0],
    guests: 1,
    occasion: occasionOptions[0]
  }
  return (
    <div data-testid="bookingComponent">
      <h2 className='title'>Book your table</h2>
      <p>Please fill the following form</p>
      <Formik
        initialValues={bookingFormInitialValues}
        validationSchema={bookingFormSchema}
        onSubmit={(values) => {
          submitAPI(values)
        }}
      >
        {(formik) => {
          const { errors, handleChange } = formik;
          const customChange = (event) => {
            handleChange(event)
            if (event.target.name === "res-date") {
              dispatchOnDateChange(event.target.value);
            }
          }
          return (
            <BookingForm errors={errors} availableTimes={availableTimes} handleChange={customChange} />
          )
        }
        }
      </Formik>

    </div>
  )
}
