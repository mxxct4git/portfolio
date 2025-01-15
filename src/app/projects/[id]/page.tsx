type pageParam = {
  id: string;
};

export default async function Project({ params }: { params: pageParam }) {
  const resolveParam = await Promise.resolve(params);
  return <h1> Project: {resolveParam.id} </h1>;
}
