import { useState } from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MyVideo() {
  const [open, setOpen] = useState(false);

  return (
    <Box 
      sx={{ 
        width: "100%", 
        maxWidth: 600, 
        position: "relative", 
        margin: "0 auto" 
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%", 
          height: 0,
          overflow: "hidden",
          borderRadius: 2,
          bgcolor: "black"
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          src="https://www.youtube.com/embed/IXdBDo3URuw"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </Box>

      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          "&:hover": { background: "rgba(0,0,0,0.8)" },
          padding: { xs: "4px", sm: "8px" }
        }}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", sm: 250 }, 
            bgcolor: "white",
            borderRadius: 2,
            p: 2,
            outline: "none"
          }}
        >
          <Typography sx={{ mb: 1, cursor: "pointer", fontWeight: 500 }}>Watch Later</Typography>
          <Typography sx={{ cursor: "pointer", fontWeight: 500 }}>Save to Playlist</Typography>
        </Box>
      </Modal>
    </Box>
  );
}