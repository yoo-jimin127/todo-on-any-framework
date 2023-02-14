import { createSignal } from 'solid-js';
import styles from './Input.module.css';

interface InputProps {
    placeholder?: string;
    onConfirm?: (text: string) => void;
}

const Input = (props: InputProps) => {
    const [text, setText] = createSignal(''); // 컴포넌트 안에서만 쓰일 필요 X, 자바스크립트에서도 동일하게 쓸 수 있는 기능 

    return (
        <input class={styles.input} value={text()} onInput={(e) => {
            setText(e.currentTarget.value); // ts에서는 e.currentTarget을 추적할 수 없다고 함
        }} 
        onKeyDown = {(e) => {
            if (e.key === 'Enter') {
                if (e.isComposing) return;

                props.onConfirm?.(text()); // 프록시 객체에 접근하기 위한 문법
                setText('');
            } 
        }}
        placeholder={props.placeholder}
        />
    );
};

export default Input;