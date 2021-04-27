import { Button } from '@material-ui/core';
import { useRouter, NextRouter } from 'next/router';

import React from 'react';

const ClientProjectsPage: React.FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push(`${router.query.id}/projectA`);
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <Button variant='contained' color='primary' onClick={loadProjectHandler}>
        Load Project A
      </Button>
    </div>
  );
};

export default ClientProjectsPage;
