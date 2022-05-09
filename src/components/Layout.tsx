import React, { ReactNode, ReactElement } from 'react';

import Logo from '../components/logo';
import Menu from '../components/menu';

type Props = {
  children?: ReactNode;
  title?: string;
  pathname: string;
};

const Layout = ({ children, pathname }: Props): ReactElement => {
  return (
    <div className="px-36 py-8">
      <div className="flex justify-between border-b py-8">
        <div className="flex space-x-8 items-center">
          <Logo />
          <Menu pathname={pathname} />
        </div>
        <div className="flex items-center space-x-8">
          <img src="/assets/images/icon-cart.svg" />
          <img src="/assets/images/image-avatar.png" width={40} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
