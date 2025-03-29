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

const MyTimeline = () => {
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
          12 تا 15 سالگی
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
            راهنمایی
          </Typography>
          <Typography>مدرسه شهدای آزمایش مرودشت</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          15 تا 18 سالگی
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
            دبیرستان
          </Typography>
          <Typography>دبیرستان شهید دستغیب مرودشت</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          18 سالگی تا کنون
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
            دانشگاه
          </Typography>
          <Typography>دانشگاه تربیت دبیر شهید رجایی</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          dir="rtl"
        >
          از سال 1403
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
            برنامه نویسی
          </Typography>
          <Typography>شروع جدی برنامه نویسی</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MyTimeline;
