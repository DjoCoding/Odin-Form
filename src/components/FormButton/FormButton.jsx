import styles from "./FormButton.module.css"

function FormButton({ value }) {
    return(
        <div className={styles.container}>
            <button className={styles.button} type="submit">{ value }</button>
        </div>
    )
}

export default FormButton;