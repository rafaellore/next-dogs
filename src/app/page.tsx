import photosGet from '@/actions/PhotosGet';
import Feed from '@/components/feed/Feed';

export default async function Home() {
  const data = await photosGet();

  return (
    <section className="container mainContainer">
      {data?.ok && <Feed photos={data.data} />}
    </section>
  );
}
