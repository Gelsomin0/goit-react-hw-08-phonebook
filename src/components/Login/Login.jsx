import { 
    Backdrop, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    Typography, 
    styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const Login = ({isOpenModal, isCloseModal}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Backdrop
                // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen}
                // onClick={(e) => {
                //     console.log(e);
                //     console.log(e.currentTarget);
                //     console.log(e.target);
                    
                //     if (e.currentTarget !== e.target) {
                //         setIsOpen(!isOpen);
                //         isCloseModal();   
                //     }
                // }}
            >
                
                
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={true}
                >
                    <DialogTitle
                        sx={{
                            m: 0,
                            p: 2,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}
                        id="customized-dialog-title"
                        variant="h6"
                    >
                    Login
                    </DialogTitle>
                    <IconButton
                    aria-label="close"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        isCloseModal();
                    }}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                    
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                    </DialogActions>
                </BootstrapDialog>


            </Backdrop>
        </div>
    );
}