import React, { useState } from "react";

import styles from "../styles/Form.module.css";
import logo from "../assets/1617785969156.jpeg";

const Form: React.FC = () => {
  interface numberRanges {
    range: string;
    clicked: boolean;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const numRanges = [
    { range: "1-20", clicked: false },
    { range: "21-50", clicked: false },
    { range: "51-200", clicked: true },
    { range: "201-500", clicked: false },
    { range: "500+", clicked: false },
  ];

  const [numberRanges, setNumberRanges] = useState<numberRanges[]>(numRanges);

  const handleClick = (index: number) => {
    setNumberRanges((prevRanges) => {
      const updatedRanges = prevRanges.map((range, i) => ({
        ...range,
        clicked: i === index,
      }));
      return updatedRanges;
    });
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.leftImage}></div>
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <img width="50px" src={logo} alt="Wobot.Ai" />
          <h4 className={styles.formHeading}>
            <span style={{ display: "block" }}>It's a delight to have</span>
            <span style={{ display: "block" }}>you onboard</span>
          </h4>

          <p className={styles.quote}>Help us know you better.</p>
          <p className={styles.quote}>
            <span style={{ display: "block" }}>
              (This is how we optimized Wobot as
            </span>
            <span style={{ display: "block" }}> per your business needs)</span>
          </p>

          <form className={styles.Form} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. John Doe"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company-name">Company Name</label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="e.g. Alpha Inc"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="industry">Industry</label>
              <select name="industry" required className={styles.selectInput}>
                <option value="">Select an industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="industry">Number of locations</label>
              <div className={styles.locations}>
                {numberRanges.map((el, index) => (
                  <p
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                      backgroundColor: el.clicked ? "#3766e8" : "#e9e8e8",
                      color: el.clicked ? "white" : "initial",
                    }}
                  >
                    {el.range}
                  </p>
                ))}
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Get Started
            </button>
          </form>
        </div>
        <div className={styles.terms}>
          <p>Terms of use | Privacy policy</p>
        </div>
      </section>
    </main>
  );
};

export default Form;
