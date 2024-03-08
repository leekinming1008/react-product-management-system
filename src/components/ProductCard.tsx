import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard = ({
  name,
  price,
  description,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{description}</p>
          <p>CAD$ {price}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to favorites</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
