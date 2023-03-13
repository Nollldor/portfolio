import {FC} from "react";
import styles from "./Contacts.module.css"
import container from "../../common/styles/Container.module.css"
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {useFormik} from "formik";
import {faRoute} from "@fortawesome/free-solid-svg-icons";
import {faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type ContactsPropsType = {}

type FormikErrorType = {
    email?: string
    password?: string
}

export const Contacts: FC<ContactsPropsType> = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            text: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            console.log(values)
            formik.resetForm()
        },
    })

    return (
        <section id={"contacts"} className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                <SectionTitle title={"Contacts"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <div className={styles.contactBoxWrapper}>
                    <div className={styles.contactBox}>
                        <div className={styles.column}>
                            <div className={styles.contactInfoBox}>
                                <h2 className={styles.subTitle}>Get In Touch</h2>
                                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,</p>
                                <div className={styles.contactInfo}>
                                    <FontAwesomeIcon className={styles.icon} icon={faRoute} transform={"shrink-6"}/>
                                    <p>301 The Greenhouse</p>
                                </div>
                                <div className={styles.contactInfo}>
                                    <FontAwesomeIcon className={styles.icon} icon={faEnvelopeCircleCheck}
                                                     transform={"shrink-6"}/>
                                    <p>info@example.com</p>
                                </div>
                                <div className={styles.contactInfo}>
                                    <FontAwesomeIcon className={styles.icon} icon={faMobileScreen}
                                                     transform={"shrink-6"}/>
                                    <p>+1 800-222-000,</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.contactForm}>
                                <h2 className={styles.subTitle}>Say Something</h2>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <input className={styles.formControl} id={'name'} name={'name'}
                                               placeholder={'Name'}
                                               onChange={formik.handleChange}
                                               value={formik.values.name}/>
                                        {formik.touched.name && <div>{formik.errors.name}</div>}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input className={styles.formControl} id={'email'} name={'email'}
                                               placeholder={'Email'}
                                               onChange={formik.handleChange}
                                               value={formik.values.email}/>
                                        {formik.touched.email && <div>{formik.errors.email}</div>}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input className={styles.formControl} id={'subject'} name={'subject'}
                                               placeholder={'Subject'}
                                               onChange={formik.handleChange}
                                               value={formik.values.subject}/>
                                        {formik.touched.subject && <div>{formik.errors.subject}</div>}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <textarea className={styles.formControl} id={'text'} name={'text'}
                                                  placeholder={'Text'}
                                                  rows={3}
                                                  onChange={formik.handleChange}
                                                  value={formik.values.text}/>
                                        {formik.touched.text && <div>{formik.errors.text}</div>}
                                    </div>
                                    <button type={"submit"}>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}