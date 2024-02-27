import styles from "./InputControl.module.css";

export interface InputControlProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export default function InputControl(props: InputControlProps) {
  const { label, name, id, inputRef, ...inputProps } = props;

  return (
    <div className={styles.control}>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} {...inputProps} ref={inputRef} />
    </div>
  );
}
