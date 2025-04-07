import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from '../features/employeeslice';
import { departments } from "../assets/departements";
import states from "../assets/states.json";
import styles from '../css/home.module.css';
import Modal from '../components/react-modal';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import DateField from '../components/DateField';
import SelectField from '../components/SelectField';
import { formatEmployeeData } from '../utils/formatData';


function Home() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [submittedData, setSubmittedData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD'),
            startDate: dayjs(data.startDate).format('YYYY-MM-DD'),
            street: data.street,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            department: data.department,
        };


        // Mise à jour Redux
        dispatch(addEmployee(formattedData));



        // Affichage des données soumises dans le modal
        setSubmittedData(formattedData);
        setIsModalOpen(true);

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
                        <DateField
                            label="Date of Birth"
                            id="dateOfBirth"
                            register={register}
                            errors={errors}
                            validationRules={{
                                required: "Required field",
                                validate: (value) => {
                                    const date = new Date(value);
                                    const today = new Date();

                                    const age = today.getFullYear() - date.getFullYear();
                                    if (age < 18) {
                                        return "You must be at least 18 years old";
                                    }
                                    return true;
                                },
                            }}
                        />

                        {/* Date de début */}
                        <DateField
                            label="Start Date"
                            id="startDate"
                            register={register}
                            errors={errors}
                            validationRules={{
                                required: "Required field",
                                validate: (value) => {
                                    const date = new Date(value);
                                    const today = new Date();
                                    if (date < today) {
                                        return "Date must be in the future";
                                    }
                                    return true;
                                },
                            }}
                        />
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
                            <SelectField
                                label="State"
                                id="state"
                                options={states.map((state) => ({
                                    value: state.abbreviation,
                                    label: state.name,
                                }))}

                                register={register}
                                errors={errors}
                                validationRules={{ required: "State is required" }}
                            />

                        </fieldset>

                        {/* Département */}
                        <SelectField
                            label="Department"
                            id="department"
                            options={departments.map((department) => ({
                                value: department,
                                label: department,
                            }))}
                            register={register}
                            errors={errors}
                            validationRules={{ required: "Department is required" }}
                        />

                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit" className={styles.submitButton}>Create Employee</button>
                </form>
            </div >

            {/* Modal de confirmation */}
            <div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="✅ Employee Created"
                >
                    <ul>
                        {submittedData && Object.entries(submittedData).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </Modal>
            </div>


        </div>
    );
}

export default Home;








