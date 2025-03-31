import { Box, LinearProgress, Typography } from "@mui/material";
const SkillItem = ({ skill, progress }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 3,
        gap: 2,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                fontSize: "2rem",
                color: `${skill.color}.main`,
              }}
            >
              {skill.icon}
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: `${skill.color}.main`,
              }}
            >
              {skill.name}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: `${skill.color}.main`,
            }}
          >
            {`${skill.level}%`}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: "10px",
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: `${skill.color}.main`,
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default SkillItem;
