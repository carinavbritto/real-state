export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <div className="group">
        <h1 className={`mb-3 text-5xl font-semibold`}>404</h1>
        <h2 className={`mb-3 text-2xl font-semibold`}>Page not found</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Could not find requested resource
        </p>
      </div>
      <a
        href="/"
        className="flex align-center  mt-5 rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-gray-400 hover:dark:text-neutral-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        Back to home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </a>
    </main>
  );
}
