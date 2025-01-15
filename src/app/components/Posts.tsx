import constants from "../utils/constantUtils";

export default function Example() {
  return (
    <div
      className="bg-white py-24 sm:py-32"
      style={{ paddingTop: "3.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Latest Posts
          </h2>
        </div>
        <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-4 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {constants.latestPostList.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-1 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt=""
                  src={post.author.imageUrl}
                  width={24}
                  height={24}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
