import React from 'react';
import styles from '../styles/Form.module.css';

const Form = () => (
  <form className={styles.form}>
    <input
      type="text"
      placeholder="Book title"
      className={styles.input}
    />
    <input
      type="text"
      placeholder="Author"
      className={styles.input}
    />
    <button type="submit" className={styles.button}>
      Add Book
    </button>
  </form>
);

export default Form;
