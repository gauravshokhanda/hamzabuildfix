import Link from "next/link"

interface NavItemProps {
    label: string,
    link: string,


}

const NavItem: React.FC<NavItemProps> = ({ label, link }) => {
    return (
        <Link href={link} className={`text-gray-500 hover:text-primary py-2 rounded-md text-md font-medium font-primary whitespace-nowrap`}>
            {label}
        </Link>
    );
}

export default NavItem;
