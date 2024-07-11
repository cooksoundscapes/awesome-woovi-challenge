import { Typography } from "@mui/material";
import { ReactNode } from "react";

export function Caption({ children }: { children: ReactNode }) {
    return (
        <Typography variant="caption" component="p" sx={theme => ({
            color: theme.palette.grey[400]
        })}>
            {children}
        </Typography>
    )
}