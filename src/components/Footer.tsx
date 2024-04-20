const Footer = () => {
  return (
    <footer className='footer footer-center p-4 bg-black text-base-content mt-20'>
      <aside>
        <p>Copyright © {process.env.NEXT_PUBLIC_YEAR} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
