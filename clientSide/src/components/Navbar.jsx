import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { logout } from "../redux/apiCalls";



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-bottom: 5px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
  color: Black;
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
`;

const StyledLinkLogo = styled(Link)`
  color: Black;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.totalCartQuantity);
  // const user = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   logout(dispatch);
  // }

  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
          <StyledLinkLogo to = "/">
            <Logo>HANOVER</Logo>
          </StyledLinkLogo>
        </Center>
        <Right>
          {/* <MenuItem>
            <StyledLink to = "/register">
              REGISTER
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={handleClick}>
            {
              user
              ?<StyledLink to = "/">LOGOUT</StyledLink>
              :<StyledLink to = "/login">LOGIN</StyledLink>
            }
          </MenuItem> */}
          <MenuItem>
            <StyledLink to = "/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </StyledLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
