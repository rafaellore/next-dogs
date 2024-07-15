import photosGet from "@/actions/PhotosGet";
import Feed from "@/components/feed/Feed";

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
