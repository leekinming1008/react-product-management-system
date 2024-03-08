import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface NavButtonProps {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <Button key={name} sx={{ my: 2, color: "white", display: "block" }}>
      <Link to={link}>{name}</Link>
    </Button>
  );
};

export default NavButton;
