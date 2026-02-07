const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-300 py-6 text-center text-lg text-black-600 ">
      <p>
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
      <p className="mt-1">
        Built with React, TypeScript & Tailwind CSS
      </p>
    </footer>
  )
}

export default Footer;
