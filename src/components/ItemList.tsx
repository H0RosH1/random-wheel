import { Box, Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React from "react";

interface IItemList {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleAddList: () => void;
}

function ItemList({ text, setText, handleAddList }: IItemList) {
  return (
    <div>
      <Grid container direction="row" sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 9}}>
          <Box>
            <TextField
              type="text"
              value={text}
              sx={{ width: "100%" }}
              onChange={(e) => setText(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Box>
            <Button
              variant="contained"
              sx={{ p: 2, width: "100%" }}
              onClick={() => handleAddList()}
            >
              add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemList;
