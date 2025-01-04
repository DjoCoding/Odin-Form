import styles from "./SideBar.module.css"

function SideBar() {
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="../../../public/odin-lined.png" alt="logo" />
                <h2>Odin</h2>
            </div>
        </div>
    )
}

export default SideBar;