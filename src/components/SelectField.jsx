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


