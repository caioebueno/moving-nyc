import { useState } from 'react'
import styles from './styles.module.css'

const PhoneButton = ({
    phone
}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(phone)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div
            style={{
                position: 'relative'
            }}
        >
            <a href={`tel:+1-${phone}`}>
                <button
                    className={styles.button}
                    onClick={handleCopy}
                >
                    {phone}
                </button>
            </a>

            {copied && <div
                className={`${styles.copyContainer} ${styles.desktop}`}
            >
                Copied
            </div>}
        </div>
    )
}

export default PhoneButton