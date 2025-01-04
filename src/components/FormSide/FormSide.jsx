import FormRow from "../FormRow/FormRow";
import FormColumn from "../FormColumn/FormColumn";
import FormButton from "../FormButton/FormButton"

import styles from "./FormSide.module.css"

function FormSide() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.informationContainer}>
                    <div className={styles.informationContainerUp}>
                        <p>This is not a real online service! You know you need something</p>
                        <p>like this in your life to help you realize your deepest dreams.</p>
                        <p>Sign up <em>now</em> to get started.</p>
                    </div>
                    <div className={styles.informationContainerBottom}>
                        <p>You know you want to.</p>
                    </div>
                </div>
            </div>
            <div className={styles.formContainer}>
                <p>Let's do it!</p>
                <form>
                    <FormRow>
                        <FormColumn label="first name" name="first-name" type="text"/>
                        <FormColumn label="last name" name="last-name" type="text"/>
                    </FormRow>
                    <FormRow>
                        <FormColumn label="email" name="email" type="email"/>
                        <FormColumn label="phone number" name="phone-number" type="text"/>
                    </FormRow>
                    <FormRow>
                        <FormColumn label="password" name="password" type="password"/>
                        <FormColumn label="confirm password" name="confirm-password" type="password"/>
                    </FormRow>
                    <FormButton value="Create Account"/>
                </form>
            </div>
            <div className={styles.footer}>
                <p>Already have an account? <span>Log in</span></p>
            </div>
        </div>        
    )
}

export default FormSide;