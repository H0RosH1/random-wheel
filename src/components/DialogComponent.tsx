import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material'
import React from 'react'

interface IDialog {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  winner: string,
  handleClose: ()=> void,
  handleRemoveList: (item: string) => void
}

export default function DialogComponent({ open, setOpen, winner, handleClose, handleRemoveList }: IDialog) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h5" sx={{ textAlign: 'center', width: 250 }}>
              Winner is <b>" {winner} "</b>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={()=> handleRemoveList(winner)} color="error">Remove</Button>
          <Button variant="contained" onClick={handleClose}>
            CLose
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
