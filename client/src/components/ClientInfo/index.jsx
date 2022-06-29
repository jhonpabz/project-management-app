import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ClientInfo = ({ client }) => {
  return (
    <>
      <Box sx={{ m: 1 }}>
        <Typography variant="h5" gutterBottom component="div">
          Client Information:
        </Typography>

        <List
          sx={{ minWidth: "350px", width: "100%", bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          <Divider light />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>{client.name}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider light />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>{client.email}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider light />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>{client.phone}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default ClientInfo;
