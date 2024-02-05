import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  return (
    <>
      {itemData.map((item) => (
        <div class="mx-80">
          <div className="p-2 m-2 border-gray-400 border-b-2  ">
            <div
              key={item.card.info.id}
              className=""
            >
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="BrowseMenu"
                className="w-40 h-40  rounded-3xl mx-80"
              />
              <div className="text-left">
                <h2 className="text-lg font-semibold mb-2">
                  {item.card.info.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  ₹
                  {item.card.info.price
                    ? (item.card.info.price / 100).toFixed(2)
                    : (item.card.info.defaultPrice / 100).toFixed(2)}
                </p>
                <p className="text-xs text-gray-700 text-left mr-60">
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
