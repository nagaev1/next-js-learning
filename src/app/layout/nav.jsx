import InputText from "../components/inputText"
import Menu from './menu'

export default function Nav () {
    const flexCenter = 'flex items-center justify-center '
    const gridItemsStyle = flexCenter + "h-12 "
    return (
        <div className="md:container mx-auto">
            <nav className='bg-sky-950 md:rounded-b-3xl h-12 flex md:justify-around justify-between items-center'>
                <div className={flexCenter + 'ml-8'}>logo</div>
                <ul className="md:flex hidden">
                    <li className={flexCenter}>home</li>
                    <li className={flexCenter}><InputText button='search' /></li>
                    <li className={flexCenter}>else</li>
                </ul>           
                <div className='md:flex hidden'>enerte</div>
                <div className={flexCenter + "md:hidden mr-8"}>
                    <Menu>
                        <div className={gridItemsStyle}><InputText button="search"/></div>
                        <div className={gridItemsStyle}>02</div>
                        <div className={gridItemsStyle}>03</div>
                        <div className={gridItemsStyle}>04</div>
                        <div className={gridItemsStyle}>05</div>
                        <div className={gridItemsStyle}>06</div>
                        <div className={gridItemsStyle}>07</div>
                        <div className={gridItemsStyle}>08</div>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}

