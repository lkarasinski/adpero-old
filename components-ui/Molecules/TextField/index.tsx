import { Field } from "formik";
import { TextField as MaterialTextField } from "@mui/material";

type Props = {
    name: string;
    label?: string;
    error?: string;
};

const TextField: React.FC<Props> = ({ name, error, label }) => {
    return (
        <Field
            name={name}
            type="input"
            as={MaterialTextField}
            label={label ?? ""}
            error={!!error}
            helperText={error}
        />
    );
};

export default TextField;
