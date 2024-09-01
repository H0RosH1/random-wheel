import { Box, Divider, IconButton, Paper, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import "./App.css";
import { useState } from "react";
import ItemList from "./components/ItemList";
import BackspaceIcon from "@mui/icons-material/Backspace";
import WheelComponent from "./components/WheelComponent";
import DialogComponent from "./components/DialogComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function App() {
  const [text, setText] = useState<string>("");
  const [segments, setSegments] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
  const [winner, setWinner] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false);

  const handleAddList = () => {
    if (text) {
      setSegments([...segments, text]);
    }
    setText("");
  };

  const handleRemoveList = (item: string) => {
    const index = segments.indexOf(item, 0);
    if (index > -1) {
      segments.splice(index, 1);
      setSegments([...segments]);
    }
    setOpen(false);
  };

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winnerItem: string) => {
    setWinner(winnerItem)
    setTimeout(() => setOpen(true), 100);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}
          >
            <WheelComponent
              segments={segments}
              segColors={segColors}
              // winningSegment={segments[3]}
              onFinished={(winner) => onFinished(winner)}
              primaryColor='black'
              contrastColor='white'
              buttonText='Spin'
              isOnlyOnce={false}
              size={270}
              upDuration={100}
              downDuration={1000}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Item>
            <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
              Item segments
            </Typography>
            <Grid container sx={{ mb: 2, maxHeight: '60vh', width: '100%', overflowY: 'auto' }}>
              {segments.map((item, index) => (
                <Grid size={{ xs: 4, md: 12 }} key={index} >
                  <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        // whiteSpace: 'wrap',
                        maxWidth: '80%',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {item}
                    </Typography>
                    <IconButton sx={{ xs: { display: 'none' }, md: { display: 'block' } }} aria-label="delete" onClick={() => handleRemoveList(item)}>
                      <BackspaceIcon />
                    </IconButton>
                  </Box>
                  <Divider
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block'
                      }
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <ItemList
              text={text}
              setText={setText}
              handleAddList={handleAddList}
            />
          </Item>
        </Grid>
      </Grid>

      <DialogComponent open={open} setOpen={setOpen} handleClose={handleClose} winner={winner} handleRemoveList={handleRemoveList} />
    </div>
  );
}

export default App;
