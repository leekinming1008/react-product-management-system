import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface NavButtonProps {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <Button
      href={link}
      key={name}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      <Link to={link}></Link>
      {name}
    </Button>
  );
};

export default NavButton;
