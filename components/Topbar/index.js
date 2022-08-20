import styles from './styles.module.css'
import Image from 'next/image'

const Topbar = () => {
    return (
        <div
            className={styles.container}
        >
            <Image 
                src='/logo.svg'
                width={196.53}
                height={47}
            />
        </div>
    )
}

export default Topbar