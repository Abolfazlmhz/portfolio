import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Typography } from "@mui/material";
import {
  School,
  LaptopMac,
  AutoStoriesOutlined,
  SquareFoot,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const MyTimeline = () => {
  const { t } = useTranslation();
  return (
    <Timeline position="alternate" sx={{ direction: "ltr", m: 0, py: 0 }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          {t("about_me.timeline.middle_school_age")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AutoStoriesOutlined />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {t("about_me.timeline.middle_school")}
          </Typography>
          <Typography>{t("about_me.timeline.middle_school_name")}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          {t("about_me.timeline.high_school_age")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="third">
            <SquareFoot />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {t("about_me.timeline.high_school")}
          </Typography>
          <Typography>{t("about_me.timeline.high_school_name")}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          {t("about_me.timeline.university_age")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {t("about_me.timeline.university")}
          </Typography>
          <Typography>{t("about_me.timeline.university_name")}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          {t("about_me.timeline.programming_start")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="primary">
            <LaptopMac />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {t("about_me.timeline.programming")}
          </Typography>
          <Typography>{t("about_me.timeline.programming_desc")}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MyTimeline;
