import { useState } from "@wordpress/element";
import { Sortable, SortableItem, FeaturedImage, Categories, Title, PostMeta, Excerpt, Divider, ReadMoreButton } from "./controls";

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
      {
        id: 5,
        name: "Excerpt",
        component: Excerpt,
        value: {
          postContent: "excerpt",
          length: 4
        }
      },
      {
        id: 6,
        name: "Divider",
        component: Divider,
        value: {
          margin: {
            top: 32,
            right: 32,
            bottom: 32,
            left: 32,
            unit: "px"
          }
        },
        units: ["px", "em", "rem"]
      },
      {
        id: 7,
        name: "Read More Button",
        component: ReadMoreButton,
        value: {
          type: "button",
          buttonLabel: "Read More",
          showArrow: false
        },
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
        items.map(({ id, name, component: Component, value, ...rest }) => {
          return <SortableItem key={id} id={id}>
            <Component label={name} direction="horizontal" value={value} onChange={(val) => handleOnChange(id, val)} {...rest} />
          </SortableItem>
        })
      }
    </Sortable>
  </>
};

export default Sort;
