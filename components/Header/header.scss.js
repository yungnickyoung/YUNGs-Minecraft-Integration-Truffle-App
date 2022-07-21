import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
header {
  margin: var(--tfl-spacing-layout-lg) var(--tfl-spacing-layout-lg);
  padding-bottom: var(--tfl-spacing-layout-sm);
  border-bottom: 1px solid var(--primary-base);
}

header > .title {
  display: flex;
  justify-content: center;
  font-size: var(--tfl-font-size-heading-md);
  font-family: var(--tfl-font-family-heading-sans);
  font-weight: var(--tfl-font-weight-body-semibold);
  margin-bottom: var(--tfl-spacing-xs);
}
`