import UpscaleForm from 'upscale-forms'
import styles from './styles.module.css'

const FormPopUp = ({
    onClose
}) => {
    return (
        <div
            className={styles.background}
            onClick={onClose}
        >
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
            >
                <UpscaleForm 
                    id={28}
                />
            </div>
        </div>
    )
}

export default FormPopUp