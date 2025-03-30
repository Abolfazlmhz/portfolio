import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { GitHub, Email, Telegram } from "@mui/icons-material";

const ContactMe = () => {
  return (
    <Box sx={{ p: "2rem", textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "35px",
        }}
      >
        ارتباط با من
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Card
        sx={{
          maxWidth: 400,
          margin: "1.5rem auto",
          borderRadius: "1.5rem",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          p: "1rem",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: "1rem",
            }}
          >
            آدرس‌های من
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: "0.5rem",
            }}
          >
            شما می‌توانید از طریق شبکه‌های اجتماعی یا ایمیل زیر با من تماس
            بگیرید.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            "& > :not(style) ~ :not(style)": {
              marginLeft: "0px",
            },
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Email sx={{ ml: 0.7 }} />}
            href="mailto:Abolfazl.mohammadizadeh@gmail.com"
            sx={{
              fontWeight: "bold",
              width: "60%",
              height: "3rem",
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
          >
            ارسال ایمیل
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHub sx={{ ml: 0.7 }} />}
            href="https://github.com/Abolfazlmhz"
            target="_blank"
            sx={{
              fontWeight: "bold",
              width: "60%",
              height: "3rem",
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
          >
            گیت‌ هاب من
          </Button>
          <Button
            variant="outlined"
            startIcon={<Telegram sx={{ ml: 0.7 }} />}
            href="https://t.me/Abolfazlmhz"
            target="_blank"
            sx={{
              fontWeight: "bold",
              width: "60%",
              height: "3rem",
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
          >
            تلگرام من
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ContactMe;
