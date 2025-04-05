
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, } from "react-redux";
import { updateFormData } from "../features/formSlice";
import { departments } from "../assets/departements";
import styles from '../css/home.module.css'; // Import des styles via CSS Modules
import DatePicker from '../components/datapicker';
import Modal from '../components/react-modal';
import dayjs from 'dayjs';
import { set } from 'date-fns';
import classNames from "react-day-picker/style.module.css"

function Home() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [openCalendarId, setOpenCalendarId] = useState(null);
    const onSubmit = (data) => {
        //MAJ Redux
        dispatch(updateFormData(data));
        const storedData = localStorage.getItem("employees");

        const existingEmployees = storedData && Array.isArray(storedData) ? JSON.parse(storedData) : [];
        const updatedEmployees = [...existingEmployees, data];

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

                            <DatePicker required
                                label={"Date of Birth"}
                                selected={dateOfBirth}
                                onSelect={setDateOfBirth}
                                calendarId={"dateOfBirth"}
                                openCalendarId={openCalendarId}
                                setOpenCalendarId={setOpenCalendarId}
                            />


                            {errors.dateOfBirth && (
                                <p className={styles.errorMessage}>{errors.dateOfBirth.message}</p>
                            )}
                        </div>

                        {/* Date de début */}
                        <div className={styles.field}>

                            <DatePicker required

                                mode="single"
                                label={"Start Date"}
                                selected={startDate}
                                onSelect={setStartDate}
                                classNames="custom-calendar"
                                calendarId={"startDate"}
                                openCalendarId={openCalendarId}
                                setOpenCalendarId={setOpenCalendarId}
                            />

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
            </div >

            {/* Modal de confirmation */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="✅ Employee Created">
                <ul>
                    {submittedData && Object.entries(submittedData).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </li>


                    ))}
                </ul>
                <p>Employee created successfully!</p>
            </Modal>
        </div>

    );


}

export default Home;







