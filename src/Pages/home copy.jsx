import { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../features/formSlice";
import { departments } from "../assets/departements";
import styles from '../css/home.module.css'; // Import des styles via CSS Modules
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Home() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const onSubmit = (data) => {
        //MAJ Redux
        dispatch(updateFormData(data));
        // Sync avec localStorage
        //const employees = JSON.parse(localStorage.getItem('employees'));
        const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmployees = [...existingEmployees, data];
        // Enregistrement dans le localStorage
        // Vérification de l'existence de la clé "employees" dans le localStorage
        /* if (!localStorage.getItem("employees")) {
             localStorage.setItem("employees", JSON.stringify([]));
             // Si la clé "employees" n'existe pas, on l'initialise avec un tableau vide
         }
         else {
             localStorage.setItem("employees", JSON.stringify(updatedEmployees));
         }
 */

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        // Affichage des données soumises dans la console

        console.log("updatedEmployees in localStorage", updatedEmployees);

        // Affichage des données soumises dans le modal
        setSubmittedData(data);
        // Affichage du modal
        setShowModal(true);
        // Réinitialisation du formulaire
        reset();
    };
    //// Calculer la date pour avoir 18 ans minimum
    const today = new Date();
    const maxDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    ).toISOString().split('T')[0];

    // Date minimum pour la date de début (aujourd'hui)
    const minStartDate = new Date().toISOString().split('T')[0];
    // Date minimum pour la date de début (aujourd'hui)
    const minStartDate = new Date().toISOString().split('T')[0];

    const onSubmit = (data) => {
        // Conversion des dates en format lisible pour l'affichage
        const displayData = { ...data };
        if (data.dateOfBirth) {
            const date = new Date(data.dateOfBirth);
            displayData.dateOfBirth = date.toLocaleDateString();
        }
        if (data.startDate) {
            const date = new Date(data.startDate);
            displayData.startDate = date.toLocaleDateString();
        }

        // Envoi à Redux et localStorage
        dispatch(addEmployee(data));

        // Affichage du modal
        setSubmittedData(displayData);
        setShowModal(true);
    };
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>HRnet</h1>
                <Link to="/employee-list" className={styles.link}>
                    View Current Employees →
                </Link>
            </div>

            {/* Formulaire */}
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Create Employee</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.grid}>
                        {/* Prénom */}
                        <div className={styles.field}>
                            <label htmlFor="first-name" className={styles.label}>First Name</label>
                            <input
                                type="text"
                                id="first-name"
                                {...register("firstName", {
                                    required: "Required field",
                                    minLength: {
                                        value: 2,
                                        message: "Minimum 2 characters"
                                    }
                                })}
                                className={`${styles.input} ${errors.firstName ? styles.errorInput : ''}`}
                            />
                            {errors.firstName && (
                                <p className={styles.errorMessage}>{errors.firstName.message}</p>
                            )}
                        </div>

                        {/* Nom */}
                        <div className={styles.field}>
                            <label htmlFor="last-name" className={styles.label}>Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                {...register("lastName", {
                                    required: "Required field",
                                    minLength: {
                                        value: 2,
                                        message: "Minimum 2 characters"
                                    }
                                })}
                                className={`${styles.input} ${errors.lastName ? styles.errorInput : ''}`}
                            />
                            {errors.lastName && (
                                <p className={styles.errorMessage}>{errors.lastName.message}</p>
                            )}
                        </div>

                        {/* Date de naissance */}
                        <div className={styles.field}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input
                                type="date"
                                id="date-of-birth"
                                max={maxDate}
                                {...register("dateOfBirth", {
                                    required: "Date of birth is required",
                                    validate: {
                                        adult: value => {
                                            const birthDate = new Date(value);
                                            const age = today.getFullYear() - birthDate.getFullYear();
                                            const m = today.getMonth() - birthDate.getMonth();
                                            return (age > 18 || (age === 18 && m >= 0)) ||
                                                "You must be at least 18 years old";
                                        }
                                    }
                                })}
                            />
                            {errors.dateOfBirth && (
                                <p className={styles.errorMessage}>{errors.dateOfBirth.message}</p>
                            )}
                        </div>

                        {/* Date de début */}
                        <div className={styles.field}>
                            <label htmlFor="start-date">Start Date</label>
                            <input
                                type="date"
                                id="start-date"
                                min={minStartDate}
                                {...register("startDate", {
                                    required: "Start date is required"
                                })}
                            />
                            {errors.startDate && (
                                <p className={styles.errorMessage}>{errors.startDate.message}</p>
                            )}
                        </div>

                        {/* Adresse */}
                        <fieldset className={styles.addressFieldset}>
                            <legend className={styles.legend}>Address</legend>

                            {/* Rue */}
                            <div className={styles.field}>
                                <label htmlFor="street" className={styles.label}>Street</label>
                                <input
                                    type="text"
                                    id="street"
                                    {...register("street", { required: "Street is required" })}
                                    className={`${styles.input} ${errors.street ? styles.errorInput : ''}`}
                                />
                                {errors.street && (
                                    <p className={styles.errorMessage}>{errors.street.message}</p>
                                )}
                            </div>

                            {/* Ville et Code postal */}
                            <div className={styles.grid}>
                                <div className={styles.field}>
                                    <label htmlFor="city" className={styles.label}>City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        {...register("city", { required: "City is required" })}
                                        className={`${styles.input} ${errors.city ? styles.errorInput : ''}`}
                                    />
                                    {errors.city && (
                                        <p className={styles.errorMessage}>{errors.city.message}</p>
                                    )}
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="zip-code" className={styles.label}>Zip Code</label>
                                    <input
                                        type="number"
                                        id="zip-code"
                                        {...register("zipCode", { required: "Zip Code is required" })}
                                        className={`${styles.input} ${errors.zipCode ? styles.errorInput : ''}`}
                                    />
                                    {errors.zipCode && (
                                        <p className={styles.errorMessage}>{errors.zipCode.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* État */}
                            <div className={styles.field}>
                                <label htmlFor="state" className={styles.label}>State</label>
                                <select
                                    id="state"
                                    {...register("state", { required: "State is required" })}
                                    className={`${styles.select} ${errors.state ? styles.errorInput : ''}`}
                                >
                                    <option value="">Select State</option>
                                    <option value="CA">California</option>
                                    <option value="NY">New York</option>
                                    <option value="TX">Texas</option>
                                </select>
                                {errors.state && (
                                    <p className={styles.errorMessage}>{errors.state.message}</p>
                                )}
                            </div>
                        </fieldset>

                        {/* Département */}
                        <div className={styles.field}>
                            <label htmlFor="department" className={styles.label}>Department</label>
                            <select
                                id="department"
                                {...register("department", { required: "Required field" })}
                                className={`${styles.select} ${errors.department ? styles.errorInput : ''}`}
                            >
                                <option value="">Select Department</option>
                                {departments.map((department, index) => (
                                    <option key={index} value={department}>{department}</option>
                                ))}
                            </select>
                            {errors.department && (
                                <p className={styles.errorMessage}>{errors.department.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit" className={styles.submitButton} >Create Employee</button>
                </form>
            </div>

            {/* Modal de confirmation */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>✅ Employee Created</h3>
                        <ul className={styles.modalList}>
                            {Object.entries(submittedData).map(([key, value]) => (
                                <li key={key} className={styles.modalItem}>
                                    <strong>{key}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setShowModal(false)} className={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;







