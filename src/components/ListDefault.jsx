import { List, ListItem, Card } from "@material-tailwind/react";
 
export default function ListDefault() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
} 