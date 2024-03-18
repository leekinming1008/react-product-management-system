import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface NavButtonProps {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <Link to={link}>
      <Button
        href={link}
        key={name}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default NavButton;
