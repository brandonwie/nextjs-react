import { NextRouter, useRouter } from 'next/router';

const PortfolioProjectPage: React.FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  console.log('router.pathname:', router.pathname);
  console.log('router.query:', router.query);
  console.log('router.asPath:', router.asPath);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
