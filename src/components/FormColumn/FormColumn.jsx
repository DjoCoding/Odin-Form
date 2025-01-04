import styles from "./FormColumn.module.css"

function FormColumn({ name, label, type }) {
    return(
        <div className={styles.container}>
            <label htmlFor={name}>{ label }</label>
            <input type={type} name={name} id={name} />
        </div>
    )
}

export default FormColumn;