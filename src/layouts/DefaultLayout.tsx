import React, { lazy } from 'react';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles"; // Import Theme type
import { Error } from "../components/error/error";





interface DefaultLayoutProps {
    headerHidden: boolean;
 
}

// Define Props Interfaces
interface LayoutProps {
    children: React.ReactNode;
}

interface MainProps {
    open: boolean;
    children: React.ReactNode;
}

// Styled Components
const Layout = styled("div")<LayoutProps>(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<MainProps>(
    ({ theme, open, }) => ({
        flexGrow: 1,
        padding: theme.spacing(2),
        paddingTop: "64px",
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: "220px",
        }),
    })
);

// DefaultLayout Component
function DefaultLayout({ headerHidden }: DefaultLayoutProps) {
    return (
        <>
            <Layout>
                {/* <Header /> */}
                <Main open={false}>
                    <Routes>
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </Main>
            </Layout>
        </>
    );
}
const mapStateToProps = (state: any) => ({
   
});
const mapDispatchToProps = (dispatch: any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);