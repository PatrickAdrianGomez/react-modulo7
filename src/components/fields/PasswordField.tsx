import { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import type { TextFieldProps } from "@mui/material"; //
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordFieldProps = TextFieldProps & {
  label?: string;
};

export const PasswordField = ({ label = "Password", ...props }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      label={label}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePassword}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
