type ProjectParams = {
  id: string;
};

export default async function Project({ params }: { params: ProjectParams }) {
  const { id } = await params;
  return <h1> Project: {id} </h1>;
}