import Image from 'next/image'
import UpscaleForm from 'upscale-forms'
import styles from './styles.module.css'

const FormPopUp = ({
    onClose
}) => {
    return (
        <>
            <div
                className={`${styles.background} ${styles.desktop}`}
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
            <div
                className={`${styles.container} ${styles.mobile}`}
            >
                <div
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    <Image 
                        src="/close.svg"
                        width={24}
                        height={24}
                    />
                </div>
                <UpscaleForm
                        id={31}
                    />
            </div>
        </>
    )
}

export default FormPopUp