export default async function PerfilUserPage({ params }: { params: { user: string } }) {
  return (
    <div>Id da conta: {params.user}</div>
  )
}
