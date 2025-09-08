import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isShowcase = location.pathname === '/';

  return (
<section className="w-full bg-white flex pl-36 pt-30 pr-36">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi dolor magni animi similique vero consequuntur maiores possimus, nesciunt velit repellat. Debitis rem nemo quis quod unde, odit ullam vel!</p>
</section>
  );
};