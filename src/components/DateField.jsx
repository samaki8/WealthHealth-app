/**
 * A React component for rendering a date input field with validation and error handling.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text for the date input field.
 * @param {string} props.id - The unique identifier for the date input field.
 * @param {Function} props.register - The function to register the input field with a form library (e.g., react-hook-form).
 * @param {Object} props.errors - An object containing validation errors for the form fields.
 * @param {Object} props.validationRules - The validation rules to apply to the date input field.
 * @returns {JSX.Element} A styled date input field with label and error message.
 */
//WealthHealth-app\src\components\DateField.jsx

import React from "react";

function DateField({ label, id, register, errors, validationRules }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            <input
                type="date"
                id={id}
                {...register(id, validationRules)}
                style={{
                    padding: "8px",
                    width: "100%",
                    border: errors[id] ? "1px solid red" : "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            {errors[id] && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors[id].message}
                </p>
            )}
        </div>
    );
}

export default DateField;
