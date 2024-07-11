import { Typography } from "@mui/material";
import { ReactNode } from "react";

export function PageTitle({ children }: { children: ReactNode }) {
    return (
        <Typography variant="h5" component="p" sx={theme => ({
            fontWeight: 'bold',
            color: theme.palette.grey[800]
        })}>
            {children}
        </Typography>
    )
}