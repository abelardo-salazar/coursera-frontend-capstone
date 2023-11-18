import React from 'react'
import { Field, Form, ErrorMessage } from "formik"
import { occasionOptions } from '../../utils/fieldsOptions'

export const BookingForm = ({ errors, availableTimes, handleChange }) => {
    return (
        <Form onChange={handleChange}>
            <div className="field-container">
                <label htmlFor="res-name">Name</label>
                <Field
                    type="text"
                    name="res-name"
                    id="res-name"
                    className={errors['res-name'] && "error"}
                />
                <ErrorMessage name="res-name" className='error' component="p" />
            </div>
            <div className="field-container">
                <label htmlFor="res-date">Choose date</label>
                <Field type="date" id="res-date" name="res-date" className={errors['res-date'] && "error"}  />
                <ErrorMessage name="res-date" className='error' component="p" />
            </div>
            <div className="field-container">
                <label htmlFor="res-time">Choose time</label>
                <Field as="select" id="res-time" name="res-time" className={errors['res-time'] && "error"}>
                    {availableTimes.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </Field>
                <ErrorMessage name="res-time" className='error' component="p" />
            </div>
            <div className="field-container">
                <label htmlFor="guests">Number of guests</label>
                <Field type="number" placeholder="1" min="1" max="10" id="guests" name="guests" className={errors['guests'] && "error"} />
                <ErrorMessage name="guests" className='error' component="p" />
            </div>
            <div className="field-container">
                <label htmlFor="occasion">Occasion</label>
                <Field as="select" id="occasion" name="occsion" className={errors['occasion'] && "error"}>
                    {occasionOptions.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </Field>
                <ErrorMessage name="occasion" className='error' component="p" />
            </div>
            <input type="submit" value="Make Your reservation" className='cta-btn' style={{ marginLeft: "auto", marginRight: "auto" }} />
        </Form>
    )
}
