import "@clayui/css/lib/css/atlas.css";
import styles from '../styles/Home.module.css'
import Topbar from "../components/Topbar";
import UpscaleForm from "upscale-forms";
import Image from "next/image";
import FormPopUp from "../components/FormPopUp";
import { useState } from "react";

export default function Home() {
  const [openForm, setOpenForm] = useState(false)
  const [addressInfo, setAddressInfo] = useState(null)

  const handleSubmit = (data) => {
    const newAddressInfo = {
      from: JSON.parse(data.from).description,
      to: JSON.parse(data.to).description
    }
    setOpenForm(true)
  }

  return (
    <div
      className={styles.container}
    >
      {openForm && <FormPopUp 
        onClose={() => setOpenForm(false)}
      />}
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
    </div >
  )
}
