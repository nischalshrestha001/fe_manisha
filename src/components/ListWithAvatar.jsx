import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";

export default function ListWithAvatar({ items }) {
    return (
        
        <Card className="w-96">
            <List>           
                <ListItem>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="candice" 
                        src="https://docs.material-tailwind.com/img/face-1.jpg" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Tania Andrew
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            Software Engineer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
            </List>
        </Card>
    )
}