'use client';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  return (
    <div className="flex justify-center items-center mt-12">
      <p className="text-xl font-semibold text-emerald-400">
        The id is
        <span className="text-2xl text-fuchsia-700">
          {' '}
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default Page;
