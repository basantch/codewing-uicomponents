import { useState } from "@wordpress/element";
import { Sortable, SortableItem, FeaturedImage } from "./controls";

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
        name: "Featured Image",
        component: FeaturedImage,
        state: image,
        setState: (a) => setImage(a)
      },
      {
        id: 2,
        name: "Featured Image",
        component: FeaturedImage,
        state: image,
        setState: (a) => setImage(a)
      },
    ]
  );

  return <>
    <Sortable items={items} setItems={setItems}>
      {
        items.map(({ id, name, component: Component, state, setState }) => {
          return <SortableItem key={id} id={id}>
            <Component label={name} direction="horizontal" value={state} onChange={setState} />
          </SortableItem>
        })
      }
    </Sortable>
  </>
};

export default Sort;
