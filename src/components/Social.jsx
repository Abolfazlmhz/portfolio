import { themeContext } from "./ChangeTheme";
import {
  Telegram,
  Instagram,
  GitHub,
  Email,
  Brightness4,
  LightMode,
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
const Social = () => {
  const { toggleTheme, isDarkMode } = useContext(themeContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        my: 3,
      }}
    >
      <Tooltip title="تلگرام" arrow>
        <IconButton
          href="https://t.me/Abolfazlmhz"
          target="_blank"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "secondary.main",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <Telegram />
        </IconButton>
      </Tooltip>
      <Tooltip title="اینستاگرام" arrow>
        <IconButton
          href="https://instagram.com/Abolfazlmhz8"
          target="_blank"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "#E1306C",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <Instagram />
        </IconButton>
      </Tooltip>
      <Tooltip title="گیت هاب" arrow>
        <IconButton
          href="https://github.com/Abolfazlmhz"
          target="_blank"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "#333333",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      <Tooltip title="ایمیل" arrow>
        <IconButton
          href="mailto:Abolfazl.mohammadizadeh@gmail.com"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "#D93025",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <Email />
        </IconButton>
      </Tooltip>
      <Tooltip title="تغییر تم" arrow>
        <IconButton
          onClick={toggleTheme}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "secondary.dark",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          {isDarkMode ? <LightMode /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default Social;
