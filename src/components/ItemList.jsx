import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  return (
    <div class="flex-wrap mx-60">
      <div className="container  flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {itemData.map((item) => (
          <div
            key={item.card.info.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
           
            <img
              src={CDN_URL + item.card.info.imageId} alt="BrowseMenu"
              className="w-full h-40 object-cover rounded-md mb-4"
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
              <p className="text-xs text-gray-700">
                {item.card.info.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
