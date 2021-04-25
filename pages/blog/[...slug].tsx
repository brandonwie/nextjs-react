import { useRouter, NextRouter } from 'next/router';

const BlogPostsPage: React.FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;
