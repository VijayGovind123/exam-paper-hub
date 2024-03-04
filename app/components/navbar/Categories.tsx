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
import { MdComputer } from "react-icons/md";
import { FcElectronics } from "react-icons/fc";
import { FcElectricalThreshold } from "react-icons/fc";
import { GiGreenhouse } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { GiCableStayedBridge } from "react-icons/gi";
import { SiAtom } from "react-icons/si";
import { GiHiveMind } from "react-icons/gi";
import { GiMining } from "react-icons/gi";
import { GiOilPump } from "react-icons/gi";
import { GiMiningHelmet } from "react-icons/gi";
import { FaTractor } from "react-icons/fa";
import { GiComputing } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";


import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'CSE',
    icon: MdComputer,
    description: 'Computer Science & Engineering',
  },
  {
    label: 'ECE',
    icon: FcElectronics,
    description: 'Electronics & Communication Engineering',
  },
  {
    label: 'EE',
    icon: FcElectricalThreshold,
    description: 'Electrical Engineering'
  },
  {
    label: 'Enviro',
    icon: GiGreenhouse,
    description: 'Environmental Engineering'
  },
  {
    label: 'Chemical',
    icon: SlChemistry,
    description: 'Chemical Engineering'
  },
  {
    label: 'Civil',
    icon: GiCableStayedBridge,
    description: 'Civil Engineering'
  },
  {
    label: 'Physics',
    icon: SiAtom,
    description: 'This property is near a lake!'
  },
  {
    label: 'Humanities',
    icon: GiHiveMind,
    description: 'Engineering Physics'
  },
  {
    label: 'Mining',
    icon: GiMining,
    description: 'Mining Engineering'
  },
  {
    label: 'Petro',
    icon: GiOilPump,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'MME',
    icon: GiMiningHelmet,
    description: 'Petroleum Engineering'
  },
  {
    label: 'Mech',
    icon: FaTractor,
    description: 'Mechanical Engineering'
  },
  {
    label: 'IT',
    icon: GiComputing,
    description: 'Information Technology'
  },
  {
    label: 'Data Science',
    icon: FaDatabase,
    description: 'Data Science'
  },
  {
    label: 'MBA',
    icon: MdManageAccounts,
    description: 'Master of Business Administration'
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
