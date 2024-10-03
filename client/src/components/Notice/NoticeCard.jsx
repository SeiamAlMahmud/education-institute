import React from 'react';
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { FaFilePdf } from "react-icons/fa";

const NoticeCard = ({ title = 'Hello file', date}) => {
  // Format the date if needed (optional)
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <Card className="w-full">
      <List className="w-full">
        <ListItem ripple={false} className="py-2 pr-1 pl-4 w-full flex justify-between items-center">
          <div className="flex flex-col flex-1 gap-1">
            <p className="font-semibold text-gray-800">{title}</p> {/* Title */}
            <p className="text-gray-500">{formattedDate}</p> {/* Date */}
          </div>
          <ListItemSuffix>
            <IconButton variant="text" color="red">
              <FaFilePdf size={30} />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
  );
}

export default NoticeCard;