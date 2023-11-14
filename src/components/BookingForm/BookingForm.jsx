import React from 'react'
import { Formik, Field, Form } from "formik"
import { bookingFormInitialValues, bookingFormSchema } from './schema'

export const timeOptions = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
]
export const occasionOptions = [
    "Birthday",
    "Anniversary"
]
export const BookingForm = () => {
    return (
        <Formik
            initialValues={bookingFormInitialValues}
            validationSchema={bookingFormSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <Form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                        <label htmlFor="res-name">Name</label>
                        <Field type="text" name="res-name" id="res-name"   />
                        
                        <label htmlFor="res-date">Choose date</label>
                        <Field type="date" id="res-date" name="res-date" />
                        <label for="res-time">Choose time</label>
                        <Field as="select" id="res-time" name="res-time">
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </Field>
                        <label for="guests">Number of guests</label>
                        <Field type="number" placeholder="1" min="1" max="10" id="guests" name="guests" />
                        <label for="occasion">Occasion</label>
                        <Field as="select" id="occasion" name="occsion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Field>
                        <input type="submit" value="Make Your reservation" />
                    </Form>
                )
            }}
        </Formik>

    )
}
