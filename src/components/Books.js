import Book from './Book';
import styles from '../styles/Books.module.css';
import Form from './Form';

const Books = () => {
  const books = [
    { title: 'A Game of Thrones', Author: 'George R. R. Martin' },
    { title: 'Ego is the Enemy', Author: 'Ryan Holiday' },
    { title: 'Fire and Blood', Author: 'George R. R. Martin' },
  ];
  return (
    <div className={styles.books}>
      <ul className={styles.list}>
        {
          books.map((book, index) => (
            <li key={index.toString()} className={styles.item}>
              <Book title={book.title} author={book.author} />
            </li>
          ))
        }
      </ul>
      <Form />
    </div>
  );
};
export default Books;
