'use client'

import { useState } from 'react'

export function Form({ onSubmit, fields }) {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        fields.forEach(field => {
            if (field.required && !values[field.name]) {
                newErrors[field.name] = 'This field is required'
            }
        })
        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) {
            onSubmit(values)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <div key={field.name} className="mb-4">
                    <label className="block mb-2">{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={values[field.name] || ''}
                        onChange={e => setValues({ ...values, [field.name]: e.target.value })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors[field.name] && <p className="text-red-500 mt-1">{errors[field.name]}</p>}
                </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
    )
}