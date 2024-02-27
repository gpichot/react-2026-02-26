export interface InputControlProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
}

export default function InputControl(props: InputControlProps) {
  const { label, name, id, ...inputProps } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} {...inputProps} />
    </div>
  );
}
