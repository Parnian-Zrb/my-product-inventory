import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "../types/products";
import { Link } from "react-router-dom";

// interface ProductCardProps {
//   image: string;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   rating: RatingType;
// }
export default function ProductCard({
  _id,
  image,
  title,
  description,
  category,
  price,
  rating,
}: ProductType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 400 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ratings: {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`product/${_id}`}>
          <Button size="small">More Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
