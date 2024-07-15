import { createStyles, makeStyles } from '@mui/styles';
import { CustomTheme } from '.';
const useStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    title: {
      textAlign: 'center',
    },
    iconColor: {
      color: '#FFFFFF',
    },
    tabs: {
      '& .MuiTab-root': {
        textTransform: 'none', borderRadius: '15px', border: 'solid', borderWidth: '1.5px',
        paddingTop: "0px", paddingBottom: '0px', paddingRight: '8px', paddingLeft: '8px',
        minHeight: '33px', textAlign: 'center', marginRight: '5px', color: '#7648A3',
        '&:hover': { backgroundColor: '#7648A3', color: '#FFFFFF', fontWeight: 'bold', }
      },

      '& .MuiTabScrollButton-root': {
        borderRadius: '10px', height: '33px', width: 'fit-content',
        border: 'solid', borderWidth: '2px', color: '#7648A3',
      },

      '& .Mui-selected': { backgroundColor: '#7648A3', color: '#FFFFFF !important', minHeight: '10px', fontWeight: 'bold' },

      '& .MuiTabs-indicator': { height: '0px', }
    },

    tabs2: {
      '& .MuiTab-root': {
        textTransform: 'none', borderRadius: '18px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
        paddingTop: "0px", paddingBottom: '0px', paddingRight: '15px', paddingLeft: '15px',
        minHeight: '33px', textAlign: 'center', marginRight: '15px', color: '#000', backgroundColor: '#fff',
        '&:hover': { backgroundColor: '#7648A3', color: '#fff', fontWeight: 'bold', }
      },

      '& .MuiTabScrollButton-root': {
        borderRadius: '10px', height: '33px', width: 'fit-content',
        border: 'solid', borderWidth: '1.5px', color: '#7648A3',
      },

      '& .Mui-selected': { backgroundColor: '#7648A3', color: '#FFFFFF !important', minHeight: '10px', fontWeight: 'bold' },

      '& .MuiTabs-indicator': { height: '0px', }
    },
    tabsGroup: {
      '& .MuiTab-root': {
        textTransform: 'none', borderRadius: '18px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
        paddingTop: "0px", paddingBottom: '0px', paddingRight: '7px', paddingLeft: '7px', whiteSpace: "noWrap",
        fontSize: "13px", fontWeight: "bold", color: "black",
        minHeight: '33px', textAlign: 'center', backgroundColor: '#fff',marginBottom:"5px",
        '&:hover': { backgroundColor: '#7648A3', color: 'black !important', fontWeight: 'bold', }
      },

      '& .MuiTabScrollButton-root': {
        borderRadius: '10px', height: '33px', width: 'fit-content',
        border: 'solid', borderWidth: '1.5px', color: '#7648A3',
      },

      '& .Mui-selected': { backgroundColor: '#7648A3', color: '#FFFFFF !important', minHeight: '10px', fontWeight: 'bold' },

      '& .MuiTabs-indicator': { height: '0px', }
    },
    counter: {
      fontSize: '17px !important', width: '21px !important', height: '21px !important',
      border: '2px solid #9A9A9A', borderRadius: '30px',
      cursor: 'pointer', backgroundColor: '#FFF',
      transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      '&:hover': { backgroundColor: '#7648A3', borderColor: '#7648A3', color: '#FFFFFF' }
    },
    tabsGroupCard: {
      position: "absolute", top: "100%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", 
      width: "380px",height: "770px", padding: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", outline: "none",
    },
    remove: { fontSize: '19px !important', color: '#BC2323', cursor: ' pointer', '&:hover': { color: '#da5454' }, },

    dateswitch: {
      width: '20px !important', height: '20px !important', padding: '0px !important', border: '2px solid #7648A3 !important',
      alignItems: 'center !important', justifyContent: 'center !important', fontSize: '15px !important',
      transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important',
      '& .MuiSvgIcon-root': { fontSize: '15px !important' },
      '&:hover': { backgroundColor: '#7648A3 !important', color: '#FFFFFF !important' }

    },
    invertedbutton: {
      backgroundColor: '#fff !important', width: '100px !important', height: '35px !important',
      '&:hover': { backgroundColor: '#fdefff !important', }
    },

    tasksbuttons: {
      width: 'max-content !important', backgroundColor: '#ffffff !important', height: ' 30px !important', color: '#000 !important', borderRadius: '30px !important',
      boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25) !important', fontWeight: 'normal !important',
      '&:hover': { backgroundColor: '#926db732 !important', color: '#7648A3 !important' }
    },

    addbutton: {
      border: 'solid !important', borderColor: '#7548a35c !important', borderRadius: '10px !important',
      padding: '5px !important', width: '30px !important', height: '30px !important',
      '& .MuiSvgIcon-root': { fontSize: '20px !important' }

    },

    weekdayButton: {
      fontWeight: 'normal !important', fontSize: '13px !important',
      boxShadow: ' 0px 0px 3px rgba(0, 0, 0, 0.25) !important',
      borderRadius: '20px !important', border: ' 2px solid #7648A3 !important',
      padding: '10px 0px 10px 0px !important', width: '5px !important',
      backgroundColor: '#E4D7F1 !important', color: '#7648A3 !important',
    },

    noMarginIcon: { '& .MuiSvgIcon-root': { margin: '0px' } },

    smallbutton: {   backgroundColor: '#fff !important', width: '103px !important', height: '33px !important', fontSize: '16px !important',  '&:hover': { backgroundColor: '#fdefff !important', color: "#000 !important" }},

    langbutton: {
      backgroundColor: '#fff !important', fontSize: '16px !important', '&:hover': { backgroundColor: '#fdefff !important', color: "#000 !important" }
    },

    langlogo: {
      color: '#7648A3 !important', fontSize: '50px !important', borderRadius: '30px !important', '&:hover': { backgroundColor: '#7648A3 !important', color: "#fff !important" }
    },

    langclose: {
      fontStyle: 'italic !important', textDecoration: 'wavy !important', cursor: 'pointer',
      '&:hover': { color: '#7648A3 !important', fontWeight: 'bold !important', }
    },

    catbutton: {
      backgroundColor: '#fff !important', borderRadius: '9px !important', justifyContent: 'right !important', boxShadow: ' 3px 3px 6px #00000029 !important', '&:hover': { backgroundColor: '#7648A3 !important', color: "#fff !important", }
    },
    dateinput: {
      '& .MuiInputBase-input': { width: '114px !important' },
      '& .MuiInputBase-root': { width: '163px !important', borderRadius: '9px !important', boxShadow: ' 3px 3px 6px #00000029 !important', height: '32px !important' },
    },



choosePreviewSelector:{width: '160px !important', height: '31.6px !important', fontSize: '14px !important', borderRadius: '9px !important', boxShadow: ' 3px 3px 6px #00000029 !important',},
selectorTitle:{fontWeight: 'bold', textAlign: "center", fontSize: '14px',paddingRight:'90px'},
  moreIconCell:  {transition: 'box-shadow 0.3s ease', '&:hover':{opacity:'50% !important', }},
  autoCompAddField:{ maxWidth: '500px', '& .MuiChip-root': { borderRadius: '5px', backgroundColor: '#E2E2E2' }},
  textAddField:{'& .MuiOutlinedInput-root': { borderRadius: '8px' }, '& .MuiOutlinedInput-notchedOutline': { border: 0 },},
  lastWeekSelector:{width: '120px !important', height: '31.6px !important', fontSize: '14px !important', borderRadius: '9px !important', boxShadow: ' 3px 3px 6px #00000029 !important',},
  searchInput:{ "& .MuiOutlinedInput-root": { borderRadius: "18px", height: 40, }, "& .MuiOutlinedInput-notchedOutline": { border: 0, },},
 tablestyle:{borderCollapse: 'separate',borderSpacing:' 0 10px',},

    widebox: { padding: "7px", paddingRight: "20px", paddingLeft: "20px", height: '50px' },
    menuButton: { width: '80px', height: '90px', borderRadius: "18px !important", display: "flex", flexDirection: "column", boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)' },
    menuIcons: { width: "50px", height: "50px" },

    tasksleftbutton: {
      display: 'flex !important', gap: '10px !important', justifyContent: 'center !important', alignItems: 'center !important', backgroundColor: '#fff !important', borderRadius: "20px !important",
      border: "2px solid red !important", paddingTop: "5px !important", paddingBottom: "5px !important", paddingRight: '15px !important', paddingLeft: '15px !important', 
    },

    dialogBorder: { '& .MuiPaper-root': { borderRadius: '44px !important' } },
    
  })

);

export default useStyles;