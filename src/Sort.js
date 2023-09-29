import { useState } from "@wordpress/element";
import { Sortable, SortableItem, FeaturedImage } from "./controls";

const Sort = () => {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        name: "Featured Image",
        component: FeaturedImage,
        value: {
          ratio: "original",
          scale: "default",
          size: "default",
          visibility: ["desktop"],
        }
      },
      {
        id: 2,
        name: "Featured Image 2",
        component: FeaturedImage,
        value: {
          ratio: "original",
          scale: "default",
          size: "default",
          visibility: ["desktop"],
        }
      },
    ]
  );

  const handleOnChange = (id, val) => {
    setItems((prevItems) => {
      const newItems = prevItems.map(obj => {
        if (obj.id === id) {
          return { ...obj, value: val }
        }
        return obj;
      })
      return newItems;
    })
  }

  return <>
    <Sortable items={items} setItems={setItems}>
      {
        items.map(({ id, name, component: Component, value }) => {
          return <SortableItem key={id} id={id}>
            <Component label={name} direction="horizontal" value={value} onChange={(val) => handleOnChange(id, val)} />
          </SortableItem>
        })
      }
    </Sortable>
  </>
};

export default Sort;
