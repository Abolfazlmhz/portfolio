import { themeContext } from "../ChangeTheme";
import {
  Telegram,
  Instagram,
  GitHub,
  MarkEmailUnreadOutlined,
  Brightness4,
  LightMode,
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
const Social = () => {
  const { toggleTheme, isDarkMode } = useContext(themeContext);

  const buttonStyle = {
    bgcolor: "primary.main",
    color: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    boxShadow: 3,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
    },
  };
  const SocialLinks = [
    {
      title: "تلگرام",
      href: "https://t.me/Abolfazlmhz",
      color: "#0088CC",
      icon: <Telegram />,
    },
    {
      title: "اینستاگرام",
      href: "https://instagram.com/Abolfazlmhz8",
      color: "#E1306C",
      icon: <Instagram />,
    },
    {
      title: "گیت هاب",
      href: "https://github.com/Abolfazlmhz",
      color: "#333333",
      icon: <GitHub />,
    },
    {
      title: "ایمیل",
      href: "mailto:Abolfazl.mohammadizadeh@gmail.com",
      color: "#FBBC04",
      icon: <MarkEmailUnreadOutlined />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        my: 3,
        px: 2,
      }}
    >
      {SocialLinks.map((social, index) => (
        <Tooltip key={index} title={social.title} arrow>
          <IconButton
            href={social.href}
            target="_blank"
            sx={{
              ...buttonStyle,
              "&:hover": {
                ...buttonStyle["&:hover"],
                bgcolor: social.color,
              },
            }}
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
      <Tooltip title="تغییر تم" arrow>
        <IconButton
          onClick={toggleTheme}
          sx={{
            ...buttonStyle,
            "&:hover": {
              ...buttonStyle["&:hover"],
              bgcolor: "secondary.dark",
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
