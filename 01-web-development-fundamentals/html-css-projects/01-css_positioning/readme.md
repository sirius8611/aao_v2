https://www.youtube.com/watch?v=jx5jmI0UlXU

Relative lets you change the position of the element, relative to where it would be if it is was statically positioned. Relative removes the newly positioned element from the document flow, but the position it would have taken up is still used by other elements in the document flow. So the other elements aren't changed by the new position. Relative isn't often used with `top/left/right/bottom` due to the changes removing element from flow.

Absolute completely removes the element from the document flow, and everything else renders as if it didn't exist. If it has a parent element with a position other than static, it will be absolute relative to the parent, otherwise it will be absolute relative to the html document.

A parent element can't be `static` and have child elements positioned relative to the parent `absolute` or `relative`. It must be `absolute/relative/sticky/fixed`.

A common use of absolute and relative is to have the child element with `absolute` positioning, and the parent with `relative`. This means the child element will be positioned absolutely (so outside of page flow), but still contained within the parent element.

---

If CSS positions were a school lunch line...
`static` would be the rule follower. They would wait patiently and not leave their spot.
`relative` would be the kid who tells everyone to hold their spot as they talk to their friend three places back.
`absolute` would be the kid who is always mysteriously best friends with the kid at the front of the line, and 'you don't mind if I just go through with them, do you?'
`sticky` is the kid that just won’t move forward with the line. `Come on, the line is going!' `fixed` is the anarchist kid that is constantly telling everyone that “lines are just a tool of your overlords to oppress the ignorant!”
