import { FETCH_MENU_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  return (
    <>
      {itemData.map((item) => (
        <div class="mx-80">
          <div className="p-2 m-2  text-base border-gray-400 border-b-2  ">
            <div
              key={item.card.info.id}
              className=""
              
            >
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                // onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              <img
                src={FETCH_MENU_URL + item.card.info.imageId}
                alt="BrowseMenu"
                className="w-60 h-40  rounded-3xl mx-80"
                
              />
              
              <div className="text-left">
                <h2 className="text-lg font-semibold mb-2">
                  {item.card.info.name}
                </h2>
                <p className="text-gray-600 text-lg mb-2">
                  ₹
                  {item.card.info.price
                    ? (item.card.info.price / 100).toFixed(2)
                    : (item.card.info.defaultPrice / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-700 text-left mr-60">
                  {item.card.info.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
