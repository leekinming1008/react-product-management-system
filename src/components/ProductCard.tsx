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
  const favoriteList = localStorage.getItem("favorite");
  const favoriteListJSON: string[] = favoriteList
    ? JSON.parse(favoriteList)
    : null;
  if (id && !favoriteListJSON) {
    localStorage.setItem("favorite", JSON.stringify([id]));
  } else if (id && favoriteListJSON) {
    if (favoriteListJSON.includes(id)) {
      favoriteListJSON.splice(favoriteListJSON.indexOf(id), 1);
      localStorage.setItem("favorite", JSON.stringify(favoriteListJSON));
      event.currentTarget.textContent = "Add to favorites";
    } else {
      favoriteListJSON.push(id);
      localStorage.setItem("favorite", JSON.stringify(favoriteListJSON));
      event.currentTarget.textContent = "Remove from favorites";
    }
  }
  location.reload();
};

const ProductCard = ({ _id, image, name, price, description }: ProductType) => {
  return (
    <ProductCardContainer>
      <Card sx={{ width: 345 }}>
        <Link to={`/productDetail/${_id}`}>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            src={image}
            title={name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              height="30px"
              overflow="hidden"
              whiteSpace="normal"
              textOverflow="ellipsis"
            >
              {name}
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
            <Typography>CAD$ {price.toString()}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <Button size="small" id={_id} onClick={handleAddRemoveFavorite}>
            {localStorage.getItem("favorite") &&
            JSON.stringify(localStorage.getItem("favorite")).includes(_id)
              ? "Remove from favorities"
              : "Add to favorities"}
          </Button>
        </CardActions>
      </Card>
    </ProductCardContainer>
  );
};

export default ProductCard;
