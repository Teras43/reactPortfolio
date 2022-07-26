import styled from "styled-components";

const NavBarMobile = () => {
  return (
    <NavContainer>
      <UlContainer>
        <NavListItem>
          <ItemContainer>
            <IconItem></IconItem>
          </ItemContainer>
        </NavListItem>
        <NavListItem>
          <ItemContainer>
            <IconItem></IconItem>
          </ItemContainer>
        </NavListItem>
        <NavListItem>
          <ItemContainer>
            <IconItem></IconItem>
          </ItemContainer>
        </NavListItem>
      </UlContainer>
    </NavContainer>
  );
};

/** Styles */
const NavContainer = styled.div``;

const UlContainer = styled.ul``;

const ItemContainer = styled.div``;

const NavListItem = styled.li``;

const IconItem = styled.span``;

/** Exports */
export default NavBarMobile;
