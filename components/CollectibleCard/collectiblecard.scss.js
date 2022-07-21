import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
.card {
  font-family: var(--tfl-font-family-heading-sans);
  --tertiary-base: rgb(20, 20, 20);
  background-color: var(--tertiary-base);
  box-shadow: 4px 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.2s;
  border-radius: 5px; /* 5px rounded corners */
  width: 12rem;
}

.card:hover {
  box-shadow: 0px 4px 16px 0 var(--primary-base);
  cursor: pointer;
}

/* Add some padding inside the card container */
.card > .container {
  padding: 2px 16px;
}

/* Add rounded corners to the top left and the top right corner of the image */
.card img {
  border-radius: 5px 5px 0 0;
}`