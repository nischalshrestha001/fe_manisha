import { Avatar, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
const ListItemWithAvatar = (props) => {
    const icon = ''
    const { item } = props;
    if(item.type === 'post'){
        return (
            <ListItem key={item._id}>
                <ListItemPrefix>
                    <Avatar variant="circular" alt="candice"
                        src={icon} />
                </ListItemPrefix>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        {item.title}
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                        {item.description}
                    </Typography>
                </div>
            </ListItem>
        ) 
    }
    else{
        return (
            <ListItem key={item._id}>
                <ListItemPrefix>
                    <Avatar variant="circular" alt="candice"
                        src={icon} />
                </ListItemPrefix>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        {item.firstname + ' ' + item.lastname}
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                        {item.emailaddress}
                    </Typography>
                </div>
            </ListItem>
        )
    }
   
}

export default ListItemWithAvatar