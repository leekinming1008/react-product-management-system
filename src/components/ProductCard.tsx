import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { ProductType } from "../types/product";
import { Link } from "react-router-dom";

const ProductCardContainer = styled.div`
  padding-left: 10px;
  padding-top: 10px;
`;

const handleAddRemoveFavorite = (event: React.MouseEvent) => {
  const id = event.currentTarget.getAttribute("id");
  if (id && !localStorage.getItem(id)) {
    localStorage.setItem(id, id);
    event.currentTarget.textContent = "Remove from favorites";
  } else if (id) {
    localStorage.removeItem(id);
    event.currentTarget.textContent = "Add to favorites";
  }
};

const ProductCard = ({ id, title, price, description, image }: ProductType) => {
  return (
    <ProductCardContainer>
      <Card sx={{ width: 345 }}>
        <Link to={`/productDetail/${id}`}>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            src={image}
            title={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              height="100px"
              overflow="hidden"
              whiteSpace="normal"
              textOverflow="ellipsis"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height="100px"
              overflow="hidden"
              whiteSpace="normal"
              textOverflow="ellipsis"
            >
              {description}
            </Typography>
            <Typography>CAD$ {price}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <Button
            size="small"
            id={id.toString()}
            onClick={handleAddRemoveFavorite}
          >
            {localStorage.getItem(id.toString())
              ? "Remove from favorities"
              : "Add to favorities"}
          </Button>
        </CardActions>
      </Card>
    </ProductCardContainer>
  );
};

export default ProductCard;
