import NewsBlock from "../components/newsBlock"
export default function NewsPage () {
    return (

        <div className="container mx-auto my-10 flex flex-row">
            <div className="md:block hidden basis-1/4">md</div>
            <div className="basis-1/2">
                <NewsBlock />
            </div>    
            <div className="lg:block hidden basis-1/4">lg</div>
        </div>
    )
}