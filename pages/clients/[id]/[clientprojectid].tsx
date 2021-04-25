import { useRouter } from 'next/router';

const SelectedClientProjectPage: React.FC = (): JSX.Element => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
