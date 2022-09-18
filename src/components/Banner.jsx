import { menuApi } from '@/api/menu';
import { HEADER } from '@/utils/constant';
import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export function Banner({}) {
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(HEADER);

  const location = useLocation()
  const params = useParams()
  const search = useSearchParams()

  const currentMenu = (array = []) => {
    let newMenu = array.filter((item) => item.active === true);
    let result = [];
    for (let index = 0; index < HEADER.length; index++) {
      for (let index1 = 0; index1 < newMenu.length; index1++) {
        if (HEADER[index].slug === newMenu[index1].slug) {
          result.push(HEADER[index]);
        }
      }
    }
    return result;
  };
  const renderMenu = (menu = []) => {
    return (
      <div>
        {menu.map((item) => (
          <div key={item.slug}>{item.name}</div>
        ))}
      </div>
    );
  };

  // Fetch current menu
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await menuApi.getMenu();
        const newData = currentMenu(data.data);
        setMenu(newData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
    return () => {
      setLoading(false);
    };
  }, []);

  return <div>Banner {renderMenu(menu)}</div>;
}
