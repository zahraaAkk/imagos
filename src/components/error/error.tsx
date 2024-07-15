import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export function Error() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", paddingTop: "20rem" , gap:"20px"
            }}>
                <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}> Page Not Found </Typography>
               
            </div>

        </>
    )
}