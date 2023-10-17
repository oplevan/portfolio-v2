import React, { useRef } from 'react';
import FlyingCars from './FlyingCars/FlyingCars';
import './Buildings.scss';
import Image from 'next/image';
import TallBuildingLeft from '@/public/assets/buildings/tall_left_building.png';
import TallBuildingRight from '@/public/assets/buildings/tall_right_building.png';
import BuildingWithLogo from '@/public/assets/buildings/building_with_logo.png';
import JapanBuilding from '@/public/assets/buildings/japan_building.png';
import TripleBuilding from '@/public/assets/buildings/triple_building.png';
import OBuilding from '@/public/assets/buildings/o_building.png';
import CurveBuilding from '@/public/assets/buildings/curve_building.png';
import MidBuilding from '@/public/assets/buildings/mid_building.png';
import SpireBuilding from '@/public/assets/buildings/spire_building.png';
import LightSculptureBuilding from '@/public/assets/buildings/light_sculpture_building.png';
import LightSculptureBuilding2 from '@/public/assets/buildings/light_sculpture_building_2.png';
import ArtBuilding from '@/public/assets/buildings/art_building.png';
import TriangleBuilding from '@/public/assets/buildings/triangle_building.png';
import Car from '@/public/assets/buildings/car-bridge.png';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Buildings({ id, children }: Props) {
  return (
    <section id={id} className='buildings-parent'>
      {children}
      <Image className='tall-building-left' src={TallBuildingLeft} alt='1' />
      <div className='flex justify-end'>
        <Image className='tall-building-right' src={TallBuildingRight} alt='2' />
      </div>
      <Image className='building-with-logo' src={BuildingWithLogo} alt='3' />
      <Image className='japan-building' src={JapanBuilding} alt='4' />
      <Image className='triple-building' src={TripleBuilding} alt='5' />
      <Image className='o-building' src={OBuilding} alt='6' />
      <Image className='curve-building' src={CurveBuilding} alt='7' />
      <Image className='mid-building' src={MidBuilding} alt='8' />
      <Image className='spire-building' src={SpireBuilding} alt='9' />
      <Image className='light-sculpture' src={LightSculptureBuilding} alt='10' />
      <Image className='light-sculpture-2' src={LightSculptureBuilding2} alt='11' />
      <Image className='art-building' src={ArtBuilding} alt='12' />
      <Image className='triangle-building' src={TriangleBuilding} alt='13' />
      <div className='hidden md:block cityscape-traffic traffic-1'>
        <FlyingCars cars={10} canvasHeight={100} />
      </div>
      <div className='hidden md:block cityscape-traffic traffic-2'>
        <FlyingCars cars={7} canvasHeight={100} />
      </div>
      <div className='hidden md:block cityscape-traffic traffic-3'>
        <FlyingCars cars={12} canvasHeight={150} />
      </div>
      <div className='hidden md:block cityscape-traffic traffic-4'>
        <FlyingCars cars={4} canvasHeight={100} />
      </div>
      <div className='bridge'>
        <Image className='car-bridge' src={Car} alt='Hover vehicle' />
      </div>
    </section>
  );
}
