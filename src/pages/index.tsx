import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

const IndexPage = (): ReactElement => {
  const router = useRouter();

  return <Layout title="Home | Next.js + TypeScript Example" pathname={router.pathname}></Layout>;
};

export default IndexPage;
