/**
 * SelectField is a reusable component for rendering a labeled select dropdown
 * with validation and error handling support.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text for the select field.
 * @param {string} props.id - The unique identifier for the select field.
 * @param {Array} props.options - An array of options for the select dropdown. Each option should be an object with `value` and `label` properties.
 * @param {Function} props.register - A function from a form library (e.g., react-hook-form) to register the select field for validation.
 * @param {Object} props.errors - An object containing validation errors, keyed by field ID.
 * @param {Object} props.validationRules - Validation rules for the select field.
 * @param {string} [props.className] - Additional CSS class names to style the select field.
 * @returns {JSX.Element} The rendered SelectField component.
 */
import React from "react";
import styles from '../css/create_employee.module.css';



function SelectField({ label, id, options, register, errors, validationRules, className }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={id} className={styles.label} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            <select
                id={id}
                {...register(id, validationRules)}
                className={`${className} ${errors[id] ? 'errorInput' : ''}`}
            >
                <option value="" style={{ color: "black" }}>Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[id] && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors[id].message}
                </p>
            )}
        </div>
    );
}

export default SelectField;


