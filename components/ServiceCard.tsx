import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const reserveIcon = () => {
    return <div><a href='http:/service'><CalendarMonthIcon /></a></div>
  }


  return (
    <Card>
      <CardHeader
        title="INDIVIDUAL KIMONO PHOTOSHOOT"
        subheader="¥ 48,000"
        action={ reserveIcon() }
      />
      <CardMedia
        component="img"
        height="550"
        image="https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Fkimono_couple.jpg?alt=media&token=68d54fa9-f793-4af0-9733-7ef08c9e493f"
        alt="Paella dish"
      />
      <CardContent>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Personalized styling using only authentic vintage kimono*
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            40~professionally edited photos with printing rights(digital files only)
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Box mb={2} ml={1} textAlign={'center'}>
          <Button variant="contained">see more portfolo</Button>
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ borderBottom: '1px solid' }}>Method:</Typography>
          <Typography paragraph sx={{ borderBottom: '1px solid' }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph sx={{ borderBottom: '1px solid' }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph sx={{ borderBottom: '1px solid' }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography sx={{ borderBottom: '1px solid' }}>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}