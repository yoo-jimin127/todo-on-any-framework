import styles from './TodoItem.module.css';
import checkLine from '../assets/check-line.svg';
import checkBold from '../assets/check-bold.svg';
import arrowBottom from '../assets/arrow-bottom.svg';
import close from '../assets/close.svg';

const TodoItem = () => {
  return (
    <div class={styles.container}>
      <div class={styles.checkIconWrap}>
        <img
          src={checkLine}
          class={styles.checkIcon}
        />
        <img
          src={checkBold}
          class={styles.checkIcon}
        />
      </div>
      <p class={styles.text}>
        할 일
      </p>
      <div class={styles.arrowIconsContainer}>
        <img
          src={arrowBottom}
          class={`${styles.arrowIcon} ${styles.arrowTop}`}
        />
        <img
          src={arrowBottom}
          class={styles.arrowIcon}
        />
      </div>
      <img src={close} class={styles.closeIcon} />
    </div>
  );
};

export default TodoItem;