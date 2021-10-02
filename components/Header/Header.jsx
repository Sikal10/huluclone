import Image from "next/image";
import HeaderItem from "./HeaderItem/HeaderItem";
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";

const link = "https://links.papareact.com/ua6"

const Header = () => {
    return (
        <header className={"flex flex-col m-5 sm:flex-row justify-between items-center h-auto "}>
            <div className={"flex justify-evenly flex-grow max-w-2xl"}>
                <HeaderItem title={"HOME"} Icon={HomeIcon} />
                <HeaderItem title={"TRENDING"} Icon={LightningBoltIcon} />
                <HeaderItem title={"VERIFIED"} Icon={BadgeCheckIcon} />
                <HeaderItem title={"COLLECTIONS"} Icon={CollectionIcon} />
                <HeaderItem title={"SEARCH"} Icon={SearchIcon} />
                <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
            </div>
            <Image className={"object-contain"} src={link} width={200} height={100} />
        </header>
    );
};

export default Header;