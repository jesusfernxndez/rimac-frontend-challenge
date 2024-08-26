import { Button, Checkbox, Input, SelectWithInput } from "@/shared/components";
import { useMediaQuery } from "@/shared/hooks";
import styles from "./styles.module.scss";
import { useFormulario } from "../../hooks";

function Formulario() {
  const { isMobile } = useMediaQuery();

  const {
    document,
    setDocument,
    cellphone,
    setCellphone,
    check1,
    setCheck1,
    check2,
    setCheck2,
    disabledButton,
    handleClick,
  } = useFormulario();

  return (
    <div className={styles.form}>
      <SelectWithInput
        selectLabel="DNI"
        label="Nro. de documento"
        value={document}
        onChange={({ target: { value } }) => setDocument(value)}
      />
      <Input
        label="Celular"
        value={cellphone}
        onChange={({ target: { value } }) => setCellphone(value)}
      />
      <Checkbox
        label="Acepto la Política de Privacidad"
        checked={check1}
        onChange={({ target: { checked } }) => setCheck1(checked)}
      />
      <Checkbox
        label="Acepto la Política de Comunicaciones Comerciales"
        checked={check2}
        onChange={({ target: { checked } }) => setCheck2(checked)}
      />
      <h5 className={styles.form__terms}>Aplican Términos y Condiciones.</h5>
      <Button
        size="large"
        variant="secondary"
        fullWidth={isMobile}
        disabled={disabledButton}
        onClick={handleClick}
      >
        Cotiza aquí
      </Button>
    </div>
  );
}

export default Formulario;
