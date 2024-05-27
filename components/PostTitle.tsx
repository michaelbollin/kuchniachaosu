export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-3xl md:leading-none lg:text-6xl text-balance mx-auto max-w-2xl">
      {children}
    </h1>
  )
}
