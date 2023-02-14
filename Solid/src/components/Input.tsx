import { createSignal } from 'solid-js';
import styles from './Input.module.css';

interface InputProps {
    placeholder?: string;
    onConfirm?: (text: string) => void;
}

const Input = (props: InputProps) => {
    const [text, setText] = createSignal('');

    return (
        <input class={styles.input} value={text()} onInput={(e) => {
            setText(e.currentTarget.value); // ts에서는 e.currentTarget을 추적할 수 없다고 함
        }} 
        onKeyDown = {(e) => {
            if (e.key === 'Enter') {
                if (e.isComposing) return;

                props.onConfirm?.(text());
                setText('');
            } 
        }}
        />
    );
};

export default Input;