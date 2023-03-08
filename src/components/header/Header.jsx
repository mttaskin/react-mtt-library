import React from 'react'
import { HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput type="text" placeholder='name' required/>
        <SelectBox>
          <option></option>
        </SelectBox>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header