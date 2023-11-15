import {FC} from "react";
import styles from "./Contacts.module.scss"
import container from "../../common/styles/Container.module.scss"
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {faRoute} from "@fortawesome/free-solid-svg-icons";
import {faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../Button/Button";

type ContactsPropsType = {}

type FormikErrorType = {
    email?: string
}

export const Contacts: FC<ContactsPropsType> = () => {

    return (
        <section id={"contacts"} className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                <SectionTitle title={"Contacts"}
                              subTitle={"I'm excited about the possibility of connecting with you. Whether you have a project you'd like to discuss, questions about our services, or just want to say hello, I'm here to chat. Reach out to me through any of the following channels"}/>
                <div className={styles.contactBoxWrapper}>
                    <div className={styles.contactBox}>
                        <div className={styles.column}>
                            <div className={styles.contactInfoBox}>
                                <h2 className={styles.subTitle}>Get In Touch</h2>
                                <p className={styles.desc}>I'm eager to answer your inquiries, dive into your ideas, and explore how we can collaborate to bring your vision to fruition. Drop me a message anytime – I'm looking forward to our conversation!</p>
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
                                <form method="POST"
                                      action="https://public.herotofu.com/v1/acdabd90-c3ef-11ed-aae2-49fd856067b7">
                                    <div className={styles.formGroup}>
                                        <input
                                            className={styles.formControl}
                                            id={'name'} name={'name'} type={'text'}
                                            placeholder={'Name'}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            className={styles.formControl}
                                            id={'email'} name={'email'}
                                            placeholder={'Email'}
                                            type={'email'}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            className={styles.formControl}
                                            id={'subject'} name={'subject'}
                                            placeholder={'Subject'}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <textarea
                                            className={styles.formControl}
                                            id={'text'} name={'text'}
                                            placeholder={'Text'}
                                            rows={3}
                                            required
                                        />
                                    </div>
                                    <div className={styles.send}>
                                        <Button title={'Send'} type={"submit"}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}