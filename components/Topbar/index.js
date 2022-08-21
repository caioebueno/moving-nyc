import styles from './styles.module.css'
import Image from 'next/image'
import PhoneButton from '../PhoneButton'

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
            <PhoneButton 
                phone="(929) 766 9288"
            />
        </div>
    )
}

export default Topbar