import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material";
import { Theme } from "@mui/material/styles"; // Import Theme type
import { useState, useEffect } from 'react';
//website pages
import LoginPage from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import DefaultLayout from "./DefaultLayout";
import DesktopLayout from "./DesktopLayout";
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
        // padding: theme.spacing(2), paddingTop: '0px',
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
function SpecialLayout({ headerHidden }: DefaultLayoutProps) {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 845);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <>
            <Layout>
                <Main open={false}>
                    <Routes>
                        {isMobile ? (
                            <>
                                <Route path="/" element={<LoginPage mobileView={true} />} />
                                <Route path="/dashboard" element={<Dashboard mobileView={true} />} />
                                <Route path="*" element={<DefaultLayout headerHidden={false} />} />
                            </>
                        ) : (
                            <>
                                <Route path="/" element={<LoginPage desktopView={true} />} />
                                {/* <Route path="/dashboard" element={<Dashboard desktopView={true} />} /> */}
                                <Route path="*" element={<DesktopLayout headerHidden={false} />} />
                            </>
                        )}
                    </Routes>
                </Main>
            </Layout>
        </>
    );
}

const mapStateToProps = (state: any) => ({
    // Map your Redux state here if needed
});

const mapDispatchToProps = (dispatch: any) => ({
    // Map your Redux dispatch actions here if needed
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecialLayout);
