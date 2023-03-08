import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'

const Header = () => {
  const printType= ["all","books","magazines"]

  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput type="text" placeholder='name' required/>
        <SelectBox>
          <option>All</option>
          </SelectBox> 
          <HeaderButton type='submit'>
            Search
          </HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header