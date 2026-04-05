import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

const recentBlogs = [
  { title: "Year Wrap-up 2023 - December Edition", likes: "45k", comments: "65k", views: 132, time: "5 min ago", author: "Brendan Smith", profile: "https://i.pravatar.cc/40?img=1" },
  { title: "Tech Trends 2024 - January Edition", likes: "40k", comments: "35k", views: 120, time: "2 hrs ago", author: "Brian Sanders", profile: "https://i.pravatar.cc/40?img=2" },
  { title: "Quarterly Review 2024 - March Recap", likes: "55k", comments: "50k", views: 142, time: "10 min ago", author: "Brittany Shaw", profile: "https://i.pravatar.cc/40?img=3" },
];

const drafts = [
  { tag: "React", title: "Responsive UI Design With Material-UI & React", text: "Responsive UI Design With Material-UI & React", updated: "March 23, 2024" },
  { tag: "React", title: "Data Visualization in React Using ApexCharts", text: "Data Visualization in React Using ApexCharts", updated: "April 13, 2024" },
  { tag: "Technology", title: "Building Scalable APIs With Node.js", text: "Building Scalable APIs With Node.js and Express", updated: "June 20, 2024" },
];

const challenges = [
  { title: "#Code&Passion", text: "Dive into coding insights, experiences & idea.", status: "New", time: "5 min ago", participants: 104 },
  { title: "#DesignInspire", text: "Explore creative design ideas, innovations and experience.", status: "Closed", time: "2 hrs ago", participants: 121 },
  { title: "#ShareYourVoice", text: "Discover unique perspectives and personal stories.", status: "New", time: "10 min ago", participants: 162 },
];

export default function SecondSec() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 2,
        p: { xs: 1, sm: 2 },
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <Card sx={{ bgcolor: "background.paper", height: "auto", minHeight: { md: "530px" }, borderRadius: 3, boxShadow: 'none', border: '1px solid #f0f0f0' }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography fontWeight="bold">Recent Blog List</Typography>
            <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
          </Box>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#f0f0f0', marginBottom: '16px' }} />
          
          {recentBlogs.map((blog, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2, p: 1.5, borderRadius: 2, border: '1px solid #f0f0f0' }}>
              <Typography fontWeight="600" fontSize={14} mb={1}>{blog.title}</Typography>
              <Box sx={{ display: "flex", gap: 1.5, fontSize: 11, color: "gray", mb: 1.5 }}>
                <span>🤍 {blog.likes}</span>
                <span>💬 {blog.comments}</span>
                <span>👁‍🗨 {blog.views}</span>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography fontSize={11} color="gray">{blog.time}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar src={blog.profile} sx={{ width: 20, height: 20 }} />
                  <Typography fontSize={11} fontWeight={500}>{blog.author}</Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* 2. Drafts */}
      <Card sx={{ bgcolor: "background.paper", height: "auto", minHeight: { md: "530px" }, borderRadius: 3, boxShadow: 'none', border: '1px solid #f0f0f0' }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography fontWeight="bold">Drafts</Typography>
              <Chip label={6} color="error" size="small" sx={{ height: 18, fontSize: 10 }} />
            </Box>
            <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
          </Box>
          <Stack spacing={2.5}>
            {drafts.map((draft, idx) => (
              <Box key={idx} sx={{ borderBottom: idx !== drafts.length - 1 ? "1px solid #f0f0f0" : "none", pb: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Chip label={draft.tag} size="small" sx={{ 
                    bgcolor: draft.tag === "React" ? "#EDE7F6" : "#E0F7FA", 
                    color: draft.tag === "React" ? "#673AB7" : "#0288D1",
                    fontSize: 10, height: 20
                  }} />
                  <IconButton size="small"><EditIcon sx={{ fontSize: 16 }} /></IconButton>
                </Box>
                <Typography fontWeight="600" fontSize={14} lineHeight={1.2}>{draft.title}</Typography>
                <Typography sx={{ color: "gray", fontSize: "11px", mt: 0.5 }}>{draft.text}</Typography>
                <Typography fontSize={10} color="gray" mt={1}>• Last update {draft.updated}</Typography>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Stack spacing={2}>
        <Card sx={{ bgcolor: "background.blog", color: "#fff", borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight="bold" mb={1}>Create New Blog</Typography>
            <Typography fontSize={12} mb={2} sx={{ opacity: 0.9 }}>
              Unleash your creativity by writing a new blog post. Share your unique insights.
            </Typography>
            <Button size="small" variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)", textTransform: 'none' }}>
              Create new blog
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "background.paper", borderRadius: 3, boxShadow: 'none', border: '1px solid #f0f0f0' }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography fontWeight="bold">Writing Challenges</Typography>
              <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
            </Box>
            <Stack spacing={2}>
              {challenges.map((c, idx) => (
                <Box key={idx} sx={{ borderBottom: idx !== challenges.length - 1 ? "1px solid #f0f0f0" : "none", pb: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography fontWeight="600" fontSize={13}>
                        {c.title} <Chip label={c.status} size="small" sx={{ 
                          bgcolor: c.status === "New" ? "#E8F5E9" : "#FFEBEE", 
                          color: c.status === "New" ? "#2E7D32" : "#C62828", 
                          fontSize: 9, height: 16, ml: 0.5 
                        }} />
                      </Typography>
                      <Typography sx={{ fontSize: "11px", color: "gray" }}>{c.text}</Typography>
                    </Box>
                    <Button size="small" sx={{ fontSize: 10, textTransform: 'none', minWidth: 'auto' }}>Accept</Button>
                  </Box>
                  <Typography fontSize={10} color="gray" mt={0.5}>
                    {c.participants} challengers • {c.time}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}