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
import { FaComputer } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";
import { FcElectricalThreshold } from "react-icons/fc";
import { GiGreenhouse } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { GiCableStayedBridge } from "react-icons/gi";
import { SiAtom } from "react-icons/si";
import { GiHiveMind } from "react-icons/gi";
import { GiMining } from "react-icons/gi";
import { FaOilWell } from "react-icons/fa6";
import { GiMiningHelmet } from "react-icons/gi";
import { FaTractor } from "react-icons/fa";
import { GiComputing } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'CSE',
    icon: FaComputer,
    description: 'This property is close to the beach!',
  },
  {
    label: 'ECE',
    icon: FcElectronics,
    description: 'This property is has windmills!',
  },
  {
    label: 'EE',
    icon: FcElectricalThreshold,
    description: 'This property is modern!'
  },
  {
    label: 'Enviro',
    icon: GiGreenhouse,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Chemical',
    icon: SlChemistry,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Civil',
    icon: GiCableStayedBridge,
    description: 'This property is on an island!'
  },
  {
    label: 'Physics',
    icon: SiAtom,
    description: 'This property is near a lake!'
  },
  {
    label: 'Humanities',
    icon: GiHiveMind,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Mining',
    icon: GiMining,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Petro',
    icon: FaOilWell,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'MME',
    icon: GiMiningHelmet,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Mech',
    icon: FaTractor,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'IT',
    icon: GiComputing,
    description: 'This property is in the desert!'
  },
  {
    label: 'Data Science',
    icon: FaDatabase,
    description: 'This property is in a barn!'
  },
  {
    label: 'MBA',
    icon: MdManageAccounts,
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
