import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCardContainer = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`;

const ProductCard = ({
  name,
  price,
  description,
  imageUrl,
}: ProductCardProps) => {
  return (
    <ProductCardContainer>
      <Card sx={{ width: 345 }}>
        <CardMedia sx={{ height: 300 }} image={imageUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description} <br />
            CAD$ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to favorites</Button>
        </CardActions>
      </Card>
    </ProductCardContainer>
  );
};

export default ProductCard;
