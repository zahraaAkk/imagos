import React, { lazy, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { styled, Modal } from "@mui/material";
import { Theme } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import { Error } from "../components/error/error";
import { CustomTheme } from '../theme/index';

// import { getDictionary, getField } from '../utils/translation/translation';
import { connect } from "react-redux";

import { Dispatch } from 'redux';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const drawerWidth = 240;
//website pages


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

const Layout = styled("div")<LayoutProps>(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
}));


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "80px",
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




function DesktopLayout({ headerHidden, }: DefaultLayoutProps) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuDrawer = () => { setIsMenuOpen(!isMenuOpen); };
    const closeMenu = () => { setIsMenuOpen(false) };
    const [filteredItems, setFilteredItems] = useState([]);
    const [isDuplicatedModalOpen, setDuplicatedModalOpen] = useState(false);
    const [AlertModalOpen, setAlertModalOpen] = useState(false);
    const handleOpenAlertModal = () => { setAlertModalOpen(true); };
    const handleCloseAlertModal = () => { setAlertModalOpen(false); };
    const handleCloseDuplicatedModal = () => { setDuplicatedModalOpen(false); };
    const sumOfBoxes = (boxCount: number, boxSize: any, canWeight: any): number => { const sumOfBoxesKg = (boxCount * boxSize * canWeight) / 1000; return sumOfBoxesKg; };
    const sumOfCans = (canCount: number, canWeight: any): number => { const sumOfCansKg = (canCount * canWeight) / 1000; return sumOfCansKg; };
    const totalKgs = (boxCount: number, boxSize: any, canWeight: any, canCount: number,): number => { const weightInKilograms = sumOfBoxes(boxCount, boxSize, canWeight) + sumOfCans(canCount, canWeight); return Number(weightInKilograms.toFixed(2)); };
    const theme: CustomTheme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const filterDuplicatedItems = (items: any) => {
        return items.filter((item: any) => {
            const qtyCondition = item.ourQtyOH < item.qtyRequested;
            if ('brands' in item) {
                let totalQtyReqSumInKgs = 0;
                item.brands.forEach((brand: any) => {
                    const brandWeightInKgs = totalKgs(brand.qty[1].boxCount, brand.boxSize, brand.canWeight, brand.qty[1].cansCount);
                    totalQtyReqSumInKgs += brandWeightInKgs;
                });
                totalQtyReqSumInKgs = Number(totalQtyReqSumInKgs.toFixed(2));
                let totalOurQtyOhSumInKgs = 0;
                item.brands.forEach((brand: any) => {
                    const brandWeightInKgs = totalKgs(brand.qty[3].boxCount, brand.boxSize, brand.canWeight, brand.qty[3].cansCount);
                    totalOurQtyOhSumInKgs += brandWeightInKgs;
                });
                totalOurQtyOhSumInKgs = Number(totalOurQtyOhSumInKgs.toFixed(2));
                let unpackedOurOnHand = 0; let unpackedRequested = 0; let sumOurQtyOn = 0; let sumQtyReq = 0;
                if ('baseUnit' in item) {
                    const UnpackedArray = item.baseUnit
                    unpackedOurOnHand = UnpackedArray[3].count;
                    unpackedRequested = UnpackedArray[1].count;
                    if (UnpackedArray[3].weightType === 'Gr') { unpackedOurOnHand = unpackedOurOnHand / 1000 } else { unpackedOurOnHand = unpackedOurOnHand }
                    if (UnpackedArray[1].weightType === 'Gr') { unpackedRequested = unpackedRequested / 1000 } else { unpackedRequested = unpackedRequested }
                }
                if ('brands' in item) { sumQtyReq += totalQtyReqSumInKgs + unpackedRequested; sumOurQtyOn += totalOurQtyOhSumInKgs + unpackedOurOnHand; }
                const totalQtyCondition = ((sumOurQtyOn < sumQtyReq) && (item.status !== 'Rejected'));

                return qtyCondition && totalQtyCondition;
            }
            const statusCondition = item.status !== 'Rejected'
            return qtyCondition && statusCondition;
        });

    };


    const location = useLocation();

    return (
        <>
            <Layout>
                {/* <TopSection toggleMenuDrawer={handleDrawerOpen} isMenuOpen={isMenuOpen} handleFinalizeApproval={handleFinalizeApproval} />
                <DesktopMenu isMenuOpen={isMenuOpen} toggleMenuDrawer={toggleMenuDrawer} closeMenu={closeMenu} /> */}
                {/* <TopSection handleFinalizeApproval={handleFinalizeApproval} handleDrawerOpen={handleDrawerOpen} open={open} /> */}
                <AppBar position="fixed" open={open}  >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <HeaderSection handleDrawerOpen={handleDrawerOpen} /> */}
                    </Toolbar>
                </AppBar>
                {/* <Sidebar handleDrawerClose={handleDrawerClose} open={open} /> */}
                <Main open={open}>

                    <Routes>
                        {/* <Route path="dashboard" element={<Dashboard desktopView={true} />} /> */}

                        <Route path="/*" element={<Error />} />
                    </Routes>
                </Main>
            </Layout>


        </>
    );
}

const mapStateToProps = (state: any) => ({

});


export default connect(mapStateToProps, null)(DesktopLayout);