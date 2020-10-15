import React, { FC } from 'react';
import styled from 'styled-components';

const S = {
  NavigationLayout: styled.div`
    width: 100%;
    background-color: #daecb6;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `,
  PageContainer: styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `,
  Navigation: styled.nav`
    display: flex;
    align-items: center;
    height: 3.5rem;
  `,
  Logo: styled.h1`
    margin: 0;
    color: #8fa563;
  `,
};

const TopNavigation: FC = () => {
  return (
    <S.NavigationLayout>
      <S.PageContainer>
        <S.Navigation>
          <S.Logo> HerbsMe </S.Logo>
        </S.Navigation>
      </S.PageContainer>
    </S.NavigationLayout>
  );
};

export default TopNavigation;
