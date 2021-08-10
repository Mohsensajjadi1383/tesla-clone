import { Fragment, useContext } from 'react'
import CarPageItem from './CarPageItem'
import '../../assets/scss/HomePage/carpageitem.css'
import Button from '../UI/Button'
import Sidemenu from '../Sidemenu/Sidemenu';
import context from '../../Store/context'
import Backdrop from '../Sidemenu/Backdrop';
function HomePage() {
    const ctx = useContext(context)



   
    return (
        <Fragment> 

            {ctx.showmenu ? <Sidemenu customclass="MenuActive" /> : <Sidemenu customclass=""/>}
            {ctx.showmenu ? <Backdrop customclass="showbackdrop" /> : <Backdrop customclass=""/>}

            <CarPageItem justify="" title="Model S" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop" >
                <Button btntypeclass="black-btn" text="CUSTOM ORDER" />
                <Button btntypeclass="white-btn" text="EXISTING ENVENTORY" />
            </CarPageItem>
            <CarPageItem justify="" title="Model Y" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" >
                <Button btntypeclass="black-btn" text="CUSTOM ORDER" />
                <Button btntypeclass="white-btn" text="EXISTING ENVENTORY" />
            </CarPageItem>
            <CarPageItem justify="" title="Model 3" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D" >
                <Button btntypeclass="black-btn" text="CUSTOM ORDER" />
                <Button btntypeclass="white-btn" text="EXISTING ENVENTORY" />
            </CarPageItem>
            <CarPageItem justify="" title="Model X" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D" >
                <Button btntypeclass="black-btn" text="CUSTOM ORDER" />
                <Button btntypeclass="white-btn" text="EXISTING ENVENTORY" />
            </CarPageItem>
            <CarPageItem justify="" title="Solar Roof" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D" >
                <Button btntypeclass="black-btn" text="ORDER NOW" />
                <Button btntypeclass="white-btn" text="LEARN MORE" />
            </CarPageItem>
            <CarPageItem justify="" title="Solar Panels" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/27ae57a3-3a1d-480c-b557-cd9caf51b96e/bvlatuR/std/2880x1620/solar-roof-hero-desktop?quality=70" >
                <Button btntypeclass="black-btn" text="CUSTOM ORDER" />
                <Button btntypeclass="white-btn" text="EXISTING ENVENTORY" />
            </CarPageItem>
            <CarPageItem justify="justify-content-center" title="Accessories" explain="Order Online for Touchless Delivery" bgsrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" >
                <Button btntypeclass="black-btn" text="SHOP NOW" />
            </CarPageItem>
        </Fragment>
    )
}

export default HomePage
