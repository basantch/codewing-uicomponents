import { useState } from "@wordpress/element";
import { Sortable, SortableItem, FeaturedImage, Categories, Title, PostMeta } from "./controls";

const Sort = () => {

  const [cat, setCat] = useState({ separator: "dash" })

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
        name: "Categories",
        component: Categories,
        value: {
          separator: "dash"
        }
      },
      {
        id: 3,
        name: "Title",
        component: Title,
        value: {
          headingTag: "h2",
          fontSize: {
            value: "48",
            unit: "px"
          }
        }
      },
      {
        id: 4,
        name: "Post Meta",
        component: PostMeta,
        value: {
          query: ["author", "published-date", "comments"],
          separator: "dot",
          authorLabel: "By",
          showAvatar: false,
          wordsPerMinute: 4,
          showUpdatedDateLabel: false,
          updatedDateLabel: ""
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
