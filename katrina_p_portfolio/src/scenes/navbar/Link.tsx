import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/common/types.ts";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Link = (props: Props) => {
    const { page, selectedPage, setSelectedPage} = props;
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    return <>
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    </>
}

export default Link