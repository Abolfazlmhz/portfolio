import { Box, Typography, Grid, Divider } from "@mui/material";
import myphoto from "../../assets/photos/myphoto.jpg";
import MyTimeline from "./MyTimeLine";
import SkillProgress from "./SkillProgress";
const AboutMe = () => {
  return (
    <Box sx={{ px: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "35px",
          textAlign: "center",
          my: "2rem",
        }}
      >
        درباره‌ی من
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Typography
        variant="body1"
        sx={{
          px: "2rem",
        }}
      >
        سلام به صفحه شخصی من خوش اومدید! من ابوالفضل محمدی زاده هستم دانشجوی
        مهندسی کامپیوتر دانشگاه تربیت دبیر شهید رجایی. متولد 1384 در شیراز هستم
        و ساکن مرودشت در استان فارس هستم. بعد از گذراندن مراحل ابتدایی در سال
        1399 وارد دبیرستان شهید دستغیب مرودشت شدم و دوران کرونا و هم در این
        مدرسه گذراندم پس از آنها و پایان کرونا به شکل جدی در مدرسه به بحث کنکور
        پرداختم و در کنکور 1402 با رتبه 217 منطقه در دانشگاه شهید رجایی پذیرفته
        شدم. بعد از مدتی و پس از کمی آزمون و خطا و گذراندن دروس مقدماتی در سال
        1403 به شکل جدی یادگیری فرانت اند را شروع کردم و در حال حاضر در حال
        تکمیل آموخته های خود در این عرصه می باشم.
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Grid
        container
        spacing={2}
        sx={{
          p: "2rem",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <Box
            component="img"
            src={myphoto}
            alt="Profile"
            sx={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: 2,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <MyTimeline />
        </Grid>
      </Grid>
      <Divider sx={{ my: "1rem" }} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "30px",
          textAlign: "center",
          my: "1rem",
        }}
      >
        مهارت ها
      </Typography>
      <SkillProgress />
      <Divider sx={{ my: "1rem" }} />
    </Box>
  );
};
export default AboutMe;
