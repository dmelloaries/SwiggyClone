import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
    const handleClick = () => {
        setShowIndex(index);
    };

    return (
        <div className="menu w-full">
            <div className="h-4  bg-[#F2F2F3] mx-auto "></div>

            <div className="w-full p-2 cursor-pointer" onClick={handleClick}>
                {/* Header */}
                <div className="w-full font-bold flex justify-between items-start">
                    <span className="text-lg pb-4">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <div className="flex items-center">
                        <span>{showItems ? "˄" : "˅"}</span>
                    </div>
                </div>
               
                <div className="flex justify-center w-full">
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;
