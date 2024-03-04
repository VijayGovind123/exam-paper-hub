'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'CSE',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'ECE',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'EE',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Enviro',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Chemical',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Civil',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Physics',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Mining',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Petro',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'MME',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Mech',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'IT',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Data Science',
    icon: GiBarn,
    description: 'This property is in a barn!'
  },
  {
    label: 'MBA',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;
