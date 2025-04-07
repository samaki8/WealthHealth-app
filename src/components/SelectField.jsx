import React from "react";

function SelectField({ label, id, options, register, errors, validationRules }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            <select
                id={id}
                {...register(id, validationRules)}
                style={{
                    padding: "8px",
                    width: "100%",
                    border: errors[id] ? "1px solid red" : "1px solid #ccc",
                    borderRadius: "4px",
                }}
            >
                <option value="">Select {label}</option>
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
