import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  TextField, 
  Typography, 
  IconButton, 
  InputAdornment 
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function LoginPage (){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard/default", { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        pt: { xs: 14, sm: 16, md: 15 }, 
        pb: 4,
        px: 2, 
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 380, 
          backgroundColor: "#fff",
          p: { xs: 1, sm: 4 },
          borderRadius: 2,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" style={{ height: 40 }} />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, color: "#5F2EEA", mb: 1 }}>
          Hi, Welcome Back
        </Typography>
        <Typography sx={{ fontSize: 14, color: "gray", mb: 3 }}>
          Enter your credentials to continue
        </Typography>

        <TextField
          fullWidth
          size="small"
          placeholder="Email Address / Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          size="small"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                color="primary"
              />
            }
            label={<Typography sx={{ fontSize: 14 }}>Keep me logged in</Typography>}
          />

          <Typography
            sx={{ fontSize: 12, color: "#5F2EEA", cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ 
            backgroundColor: "#5F2EEA", 
            py: 1.5, 
            mb: 2,
            textTransform: 'none',
            '&:hover': { backgroundColor: "#4b24c9" } 
          }}
          onClick={handleLogin}
        >
          Sign In
        </Button>

        <Typography sx={{ fontSize: 13, color: "gray", mb: 0 }}>
          Don't have an account?
        </Typography>
      </Box>

      <Box 
        sx={{ 
          mt: 3, 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: 1,
          width: '100%',
          maxWidth: 420 
        }}
      >
        {[
          { name: "Firebase", img: "/images/fire.png" },
          { name: "Auth0", img: "/images/auth.avif" },
          { name: "Aws", img: "/images/aws.png" },
          { name: "Supabase", img: "/images/suba.jpg" }
        ].map((item) => (
          <Button 
            key={item.name}
            variant="outlined" 
            sx={{
              display: 'flex',
              gap: '5px',
              width: { xs: 'calc(50% - 8px)', sm: '100px' },
              textTransform: 'none',
              color: 'black',
              border: '1px solid lightgray',
              fontSize: '13px',
              backgroundColor: '#fff',
              '&:hover': { border: '1px solid #5F2EEA' }
            }}
          >
            <img src={item.img} alt="" style={{ width: '18px', height: '18px' }} />
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

