import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
.collectibles-view {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  width: 80%;
  padding: 0px var(--tfl-spacing-layout-lg) var(--tfl-spacing-layout-lg);
}

.collectibles-view .new-card {
  font-family: var(--tfl-font-family-heading-sans);
  transition: 0.4s;
  border: 4px solid rgb(100, 100, 100);
  border-radius: 5px;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.collectibles-view .new-card:hover {
  border: 4px solid var(--primary-base);
  cursor: pointer;
}

.collectibles-view .new-card > * {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
`