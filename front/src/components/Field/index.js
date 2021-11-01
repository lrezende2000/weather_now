import { Container, Input } from './styles';

function Field({ name, Icon, value, setValue, type, onKeyUp }) {
  return (
    <Container>
      <label htmlFor={name}>
        <Icon color="var(--primary-color)" size={16} />
      </label>
      <Input
        id={name}
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type || 'text'}
        onKeyUp={onKeyUp}
      />
    </Container>
  );
}

export default Field;
