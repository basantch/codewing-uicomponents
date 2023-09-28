import { useState } from "@wordpress/element";
import { Sortable, FeaturedImage } from "./controls";

const Sort = () => {
  const [image, setImage] = useState({
    ratio: "original",
    scale: "default",
    size: "default",
    visibility: ["desktop"],
  });

  const [items, setItems] = useState(
    [
      {
        id: 1,
        component: <FeaturedImage
          label="Featured Image"
          direction="horizontal"
          value={image}
          onChange={setImage}
        />
      },
      {
        id: 2,
        component: <FeaturedImage
          label="Featured Image 2"
          direction="horizontal"
          value={image}
          onChange={setImage}
        />
      },
      {
        id: 3,
        component: <FeaturedImage
          label="Featured Image 3"
          direction="horizontal"
          value={image}
          onChange={setImage}
        />
      },
    ]
  );

  console.log(items)

  return <Sortable items={items} setItems={setItems} />
};

export default Sort;
