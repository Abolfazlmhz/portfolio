import { themeContext } from "../ChangeTheme";
import {
  Telegram,
  Instagram,
  GitHub,
  MarkEmailUnreadOutlined,
  Brightness4,
  LightMode,
  Translate,
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
const Social = () => {
  const { toggleTheme, ThemeMode } = useContext(themeContext);
  const { i18n, t } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  const buttonStyle = {
    bgcolor: "primary.main",
    color: "white",
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    boxShadow: 3,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
    },
  };
  const SocialLinks = [
    {
      title: t("contact.telegram"),
      href: "https://t.me/Abolfazlmhz",
      color: "#0088CC",
      icon: <Telegram />,
    },
    {
      title: t("contact.instagram"),
      href: "https://instagram.com/Abolfazlmhz8",
      color: "#E1306C",
      icon: <Instagram />,
    },
    {
      title: t("contact.github"),
      href: "https://github.com/Abolfazlmhz",
      color: "#333333",
      icon: <GitHub />,
    },
    {
      title: t("contact.email"),
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
      <Tooltip title={t("sidebar.theme")} arrow>
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
          {ThemeMode === "light" ? <LightMode /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
      <Tooltip title={t("sidebar.lang")} arrow>
        <IconButton
          onClick={toggleLanguage}
          sx={{
            ...buttonStyle,
            "&:hover": {
              ...buttonStyle["&:hover"],
              bgcolor: "secondary.dark",
            },
          }}
        >
          {<Translate />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default Social;
