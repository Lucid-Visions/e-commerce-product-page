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
    <div className="px-28 py-8">
      <div className="flex space-x-8 items-center border-b py-8">
        <Logo />
        <Menu pathname={pathname} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
