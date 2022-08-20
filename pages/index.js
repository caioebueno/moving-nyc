import "@clayui/css/lib/css/atlas.css";
import styles from '../styles/Home.module.css'
import Topbar from "../components/Topbar";
import UpscaleForm from "upscale-forms";
import Image from "next/image";
import FormPopUp from "../components/FormPopUp";
import { useState } from "react";

export default function Home() {
  const [openForm, setOpenForm] = useState(true)
  const [addressInfo, setAddressInfo] = useState(null)

  const handleSubmit = (data) => {
    const newAddressInfo = {
      from: JSON.parse(data.from).description,
      to: JSON.parse(data.to).description
    }
    setOpenForm(true)
  }

  return (
    <>
      {openForm && <FormPopUp
        onClose={() => setOpenForm(false)}
      />}
      <div
        className={`${styles.container} ${styles.desktop}`}
      >

        <div
          className={styles.wrapper}
        >
          <Topbar />
          <div
            className={styles.content}
          >
            <div
              className={styles.col}
            >
              <span
                className={styles.topWriting}
              >NYC MOVING MADE EASY</span>
              <h1
                className={styles.title}
              >
                We Make <span className={styles.yellow}>Moving</span><br />Cheap and fast
              </h1>
              <h2
                className={styles.subtitle}
              >
                Get a quote now as low as 379$ for moving inside NYC.<br />
                We provide fair prices and no hiden extra fees for services.
              </h2>
              <div
                className={styles.formContainer}
              >
                <UpscaleForm
                  id={29}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
            <Image
              src="/illustration.svg"
              width={370.98}
              height={567.31}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.mobile} ${styles.container}`}
      >
        <div
          className={styles.topbar}
        >
          <Image
            src="/logo.svg"
            width={196.53}
            height={47}
          />
        </div>
        <div
          className={styles.col}
        >
          <span
            className={styles.topWriting}
          >NYC MOVING MADE EASY</span>
          <h1
            className={styles.title}
          >
            We Make <span className={styles.yellow}>Moving</span><br />Cheap and fast
          </h1>
          <h2
            className={styles.subtitle}
          >
            Get a quote now as low as 379$<br /> for moving inside NYC.
            We provide fair prices <br /> and no hiden extra fees for services.
          </h2>
          <div
            className={styles.formContainer}
          >
            <UpscaleForm
              id={32}
              onSubmit={() => setOpenForm(true)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
